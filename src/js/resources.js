import { ImageSource, Sound, Resource, Loader, Color } from "excalibur";
import boneImage from "../images/bone.png";
import powerImage from "../images/powerup.png";
import sansImage from "../images/sans.png";
import textImage from "../images/textbox.png";
import playerImage from "../images/Undertale.png";
import backgroundImage from "../images/background.png";
import titleImage from '../images/loadingscreen.png';
import victoryImage from '../images/thumbsup.png';
import bullet from '../images/bullet.png';
import backgroundMusic from '../images/megalovania.mp3';
import gameoverMusic from '../images/Determination.mp3';
import settingMusic from '../images/startmenu.mp3';
import victoryMusic from '../images/victorysong.mp3';

const Resources = {
  Bone: new ImageSource(boneImage),
  Powerup: new ImageSource(powerImage),
  Sans: new ImageSource(sansImage),
  Text: new ImageSource(textImage),
  Player: new ImageSource(playerImage),
  Background: new ImageSource(backgroundImage),
  Title: new ImageSource(titleImage),
  Bullet: new ImageSource(bullet),
  victoryImage: new ImageSource(victoryImage),
  backgroundMusic: new Sound(backgroundMusic),
  gameoverMusic: new Sound(gameoverMusic),
  settingMusic: new Sound(settingMusic),
  victoryMusic: new Sound(victoryMusic),
};
const ResourceLoader = new Loader([Resources.Bone,Resources.Powerup, Resources.Sans, Resources.Text, Resources.Player, Resources.Background, Resources.victoryImage, Resources.Bullet, Resources.backgroundMusic, Resources.gameoverMusic, Resources.settingMusic, Resources.victoryMusic]);
ResourceLoader.logo = titleImage
ResourceLoader.logoWidth = 625
ResourceLoader.logoHeight = 299
ResourceLoader.backgroundColor = Color.Black
export { Resources, ResourceLoader };
