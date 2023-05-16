import { ImageSource, Sound, Resource, Loader, Color } from "excalibur";
import boneImage from "../images/bone.png";
import sansImage from "../images/sans.png";
import textImage from "../images/textbox.png";
import playerImage from "../images/Undertale.png";
import backgroundImage from "../images/background.png";
import titleImage from '../images/loadingscreen.png';
import backgroundMusic from '../images/megalovania.mp3';

const Resources = {
  Bone: new ImageSource(boneImage),
  Sans: new ImageSource(sansImage),
  Text: new ImageSource(textImage),
  Player: new ImageSource(playerImage),
  Background: new ImageSource(backgroundImage),
  Title: new ImageSource(titleImage),
  backgroundMusic: new Sound(backgroundMusic),
};
const ResourceLoader = new Loader([Resources.Bone, Resources.Sans, Resources.Text, Resources.Player, Resources.Background, Resources.backgroundMusic]);
ResourceLoader.logo = titleImage
ResourceLoader.logoWidth = 625
ResourceLoader.logoHeight = 299
ResourceLoader.backgroundColor = Color.Black
export { Resources, ResourceLoader };
