import {Label, Group, Path, utils, registerNodeType} from 'sprite-core'
const {parseStringFloat, parseColorString, parseValue, attr} = utils

function ticksToD(axis) {
  if(!axis) return

  let {
    direction,
    ticks,
    length,
    vLength,
    font,
    lineWidth,
    color,
    axisScales,
  } = axis.attr()

  const originTicks = ticks.slice(0)

  let axisTicks = ticks.slice(0)

  if(axisScales.length) {
    axisTicks = axisTicks.map(tick => axisScales.reduce((v, s) => s(v), tick))
    axisTicks = axisTicks.filter(tick => tick >= 0)
  }

  if(axisTicks.length <= 0) {
    return
  }
  ticks = ticks.slice(-axisTicks.length)

  if(axisScales.length) {
    const scale = axisScales[axisScales.length - 1],
      [start, end] = scale.range(),
      [from, to] = scale.domain()

    if(start < axisTicks[0]) {
      ticks.unshift(from)
      axisTicks.unshift(start)
    }
    if(end > axisTicks[axisTicks.length - 1]) {
      ticks.push(to)
      axisTicks.push(end)
    }
  }

  const dist = axisTicks[axisTicks.length - 1] - axisTicks[0]
  if(length === 'auto') length = dist

  let d

  const points = axisTicks.map(tick => (length * (tick - axisTicks[0])) / dist)

  let offsetY = 0,
    offsetX = 0,
    offsetX0 = 0

  axis.clear()

  ticks.forEach((data, i) => {
    if(originTicks.indexOf(data) === -1) return

    const label = new Label()

    label.text = data
    label.attr({font, fillColor: color})
    const [w, h] = label.contentSize

    offsetY = Math.max(offsetY, h)
    offsetX = Math.max(offsetX, w)

    if(i === 0) {
      offsetX0 = w
    }

    let x = points[i]

    if(x != null) {
      if(direction === 'top') {
        label.attr({
          anchor: [0.5, 1.0],
          pos: [offsetX0 + x, vLength - 5],
        })
      } else if(direction === 'bottom') {
        label.attr({
          anchor: [0.5, 0],
          pos: [offsetX0 + x, vLength],
        })
      } else if(direction === 'left') {
        x = length - x
        label.attr({
          anchor: [0, 0.5],
          pos: [vLength + 5, x],
        })
      } else if(direction === 'right') {
        x = length - x
        label.attr({
          anchor: [1.0, 0.5],
          pos: [-5, x],
        })
      }

      axis.appendChild(label)
    }
  })

  let rect
  if(direction === 'top') {
    d = `M0 ${vLength} h${length}`
    points.forEach((point) => {
      d += `M${point} 0 v${vLength}`
    })
    rect = [offsetX0, offsetY + 5, length, vLength]
  } else if(direction === 'bottom') {
    d = `M0 0 h${length}`
    points.forEach((point) => {
      d += `M${Math.round(point)} 0 v${vLength}`
    })
    rect = [offsetX0, 0, length, vLength]
  } else if(direction === 'left') {
    d = `M0 0 v${length}`
    points.forEach((point) => {
      d += `M0 ${length - point} h${vLength}`
    })
    rect = [0, offsetY / 2, vLength, length]
  } else if(direction === 'right') {
    d = `M${offsetX + 5} 0 v${length}`
    points.forEach((point) => {
      d += `M${offsetX + 5 - vLength} ${length - point} h${vLength}`
    })

    rect = [offsetX + 5, offsetY / 2, vLength, length]
  }

  const path = new Path()
  path.attr({
    d,
    lineWidth,
    strokeColor: color,
    pos: [rect[0], rect[1]],
  })
  axis.appendChild(path)
}

class AxisSpriteAttr extends Group.Attr {
  constructor(subject) {
    super(subject)

    this.setDefault({
      length: 'auto',
      vLength: 10,
      ticks: [0, 100],
      direction: 'top',

      lineWidth: 1,
      color: 'black',
      renderMode: 'stroke', // stroke, fill

      font: '24px Arial',
      axisScales: [],

      tickFormat: d => d
    })
  }

  @attr
  set font(val) {
    this.clearCache()
    this.set('font', val)
    ticksToD(this.subject)
  }

  @attr
  set direction(val) {
    this.clearCache()
    this.set('direction', val)
    ticksToD(this.subject)
  }

  @attr
  set length(val) {
    this.clearCache()
    this.set('length', val)
    ticksToD(this.subject)
  }

  @attr
  set vLength(val) {
    this.clearCache()
    this.set('vLength', Math.round(val))
    ticksToD(this.subject)
  }

  @parseValue(parseStringFloat)
  @attr
  set ticks(ticks) {
    this.clearCache()
    this.set('ticks', ticks.map(this.tickFormat).sort((a, b) => a - b))
    ticksToD(this.subject)
  }

  // set d3 scales, unsafe
  @attr
  set axisScales(val) {
    this.clearCache()
    this.saveObj('axisScales', val)
    ticksToD(this.subject)
  }
  get axisScales() {
    return this.loadObj('axisScales') || []
  }

  @attr
  set lineWidth(val) {
    this.clearCache()
    this.set('lineWidth', val)
    ticksToD(this.subject)
  }

  @parseValue(parseColorString)
  @attr
  set color(val) {
    this.clearCache()
    this.set('color', val)
    ticksToD(this.subject)
  }

  @attr
  set tickFormat(fn) {
    this.clearCache()
    const ticks = this.ticks.map(fn)
    this.set('ticks', ticks)
    this.set('tickFormat', fn)
    ticksToD(this.subject)
  }
}

export default class Axis extends Group {
  static Attr = AxisSpriteAttr

  constructor(ticks = [0, 100], opts) {
    super(opts)
    if(ticks) {
      this.attr({ticks})
    }
  }

  cloneNode() {
    const node = super.cloneNode()
    node.attr('axisScales', this.attr('axisScales'))
  }
}

registerNodeType('axis', Axis)
