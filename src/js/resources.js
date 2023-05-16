import { ImageSource, Sound, Resource, Loader, Color } from "excalibur";
import boneImage from "../images/bone.png";
import sansImage from "../images/sans.png";
import textImage from "../images/textbox.png";
import playerImage from "../images/Undertale.png";
import backgroundImage from "../images/background.png";
import titleImage from '../images/loadingscreen.png'

const Resources = {
  Bone: new ImageSource(boneImage),
  Sans: new ImageSource(sansImage),
  Text: new ImageSource(textImage),
  Player: new ImageSource(playerImage),
  Background: new ImageSource(backgroundImage),
};
const ResourceLoader = new Loader([Resources.Bone, Resources.Sans, Resources.Text, Resources.Player, Resources.Background]);
ResourceLoader.logo = titleImage
ResourceLoader.logoWidth = 659
ResourceLoader.logoHeight = 203
ResourceLoader.backgroundColor = Color.Black
export { Resources, ResourceLoader };
