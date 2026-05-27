import { twoMathPi } from '../constants.mjs';

/**
 * Render a round control, as per fabric features.
 * This function is written to respect object properties like transparentCorners, cornerSize
 * cornerColor, cornerStrokeColor
 * plus the addition of offsetY and offsetX.
 * @param {CanvasRenderingContext2D} ctx context to render on
 * @param {Number} left x coordinate where the control center should be
 * @param {Number} top y coordinate where the control center should be
 * @param {Object} styleOverride override for FabricObject controls style
 * @param {FabricObject} fabricObject the fabric object for which we are rendering controls
 */
function renderCircleControl(ctx, left, top, styleOverride, fabricObject) {
  ctx.save();
  const {
    stroke,
    xSize,
    ySize,
    opName
  } = this.commonRenderProps(ctx, left, top, fabricObject, styleOverride);
  let size = xSize;
  // TODO: use proper ellipse code.
  if (xSize > ySize) {
    ctx.scale(1.0, ySize / xSize);
  } else if (ySize > xSize) {
    size = ySize;
    ctx.scale(xSize / ySize, 1.0);
  }
  ctx.beginPath();
  ctx.arc(0, 0, size / 2, 0, twoMathPi, false);
  ctx[opName]();
  if (stroke) {
    ctx.stroke();
  }
  ctx.restore();
}

/**
 * Render a square control, as per fabric features.
 * This function is written to respect object properties like transparentCorners, cornerSize
 * cornerColor, cornerStrokeColor
 * plus the addition of offsetY and offsetX.
 * @param {CanvasRenderingContext2D} ctx context to render on
 * @param {Number} left x coordinate where the control center should be
 * @param {Number} top y coordinate where the control center should be
 * @param {Object} styleOverride override for FabricObject controls style
 * @param {FabricObject} fabricObject the fabric object for which we are rendering controls
 */
function renderSquareControl(ctx, left, top, styleOverride, fabricObject) {
  ctx.save();
  const {
      stroke,
      xSize,
      ySize,
      opName
    } = this.commonRenderProps(ctx, left, top, fabricObject, styleOverride),
    xSizeBy2 = xSize / 2,
    ySizeBy2 = ySize / 2;
  // this does not work, and fixed with ( && ) does not make sense.
  // to have real transparent corners we need the controls on upperCanvas
  // transparentCorners || ctx.clearRect(-xSizeBy2, -ySizeBy2, xSize, ySize);
  ctx[`${opName}Rect`](-xSizeBy2, -ySizeBy2, xSize, ySize);
  if (stroke) {
    ctx.strokeRect(-xSizeBy2, -ySizeBy2, xSize, ySize);
  }
  ctx.restore();
}

export { renderCircleControl, renderSquareControl };
//# sourceMappingURL=controlRendering.mjs.map
