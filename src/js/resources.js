import { ImageSource, Sound, Resource, Loader } from "excalibur";
import boneImage from "../images/bone.png";
import sansImage from "../images/sans.png";
import textImage from "../images/textbox.png";
import playerImage from "../images/Undertale.png";

const Resources = {
  Bone: new ImageSource(boneImage),
  Sans: new ImageSource(sansImage),
  Text: new ImageSource(textImage),
  Player: new ImageSource(playerImage),
};
const ResourceLoader = new Loader([Resources.Bone, Resources.Sans, Resources.Text, Resources.Player]);

export { Resources, ResourceLoader };
