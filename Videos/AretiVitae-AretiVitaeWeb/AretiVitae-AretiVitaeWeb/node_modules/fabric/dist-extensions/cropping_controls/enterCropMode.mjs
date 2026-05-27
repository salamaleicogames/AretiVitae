import { createImageCroppingControls } from './croppingControls.mjs';
import { cropPanMoveHandler } from './croppingHandlers.mjs';

/**
 * Coordinates the change to image to enter crop mode and returns
 * a function to exit crop mode
 */
const enterCropMode = function enterCropMode(_ref) {
  var _fabricImage$canvas2;
  let {
    target
  } = _ref;
  const fabricImage = target;
  const {
    controls
  } = fabricImage;
  fabricImage.controls = createImageCroppingControls();
  fabricImage.on('moving', cropPanMoveHandler);
  fabricImage.setCoords();
  const exitCropMode = () => {
    var _fabricImage$canvas;
    fabricImage.off('moving', cropPanMoveHandler);
    fabricImage.controls = controls;
    fabricImage.setCoords();
    fabricImage.once('mousedblclick', enterCropMode);
    (_fabricImage$canvas = fabricImage.canvas) === null || _fabricImage$canvas === void 0 || _fabricImage$canvas.requestRenderAll();
  };
  fabricImage.once('mousedblclick', exitCropMode);
  (_fabricImage$canvas2 = fabricImage.canvas) === null || _fabricImage$canvas2 === void 0 || _fabricImage$canvas2.requestRenderAll();
};

export { enterCropMode };
//# sourceMappingURL=enterCropMode.mjs.map
