import { ImageSource, Sound, Resource, Loader } from "excalibur";
import fishImage from "../images/bone.png";
import sansImage from "../images/sans.png";
import textImage from "../images/textbox.png";

const Resources = {
  Fish: new ImageSource(fishImage),
  Sans: new ImageSource(sansImage),
  Text: new ImageSource(textImage),
};
const ResourceLoader = new Loader([Resources.Fish, Resources.Sans, Resources.Text]);

export { Resources, ResourceLoader };
