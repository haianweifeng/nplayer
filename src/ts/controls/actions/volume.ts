import Component from '../../component';
import Events from '../../events';
import icons from '../../icons';
import RPlayer from '../../rplayer';
import { Drag } from '../../utils';
import Bar from '../bar';
import Dot from '../dot';
import Tray from '../tray';

class Icon extends Tray {
  mutedClass = 'rplayer_action_volume_icon-muted';

  constructor(player: RPlayer) {
    super(player);

    this.appendChild(icons.volume);
    this.appendChild(icons.muted);

    this.update();
  }

  onClick(): void {
    this.player.toggleVolume();
  }

  onVolumeChange(): void {
    if (this.player.muted() && this.containsClass(this.mutedClass)) return;
    this.update();
  }

  update(): void {
    if (this.player.muted()) {
      this.addClass(this.mutedClass);
      this.changeTipText('取消静音');
    } else {
      this.removeClass(this.mutedClass);
      this.changeTipText('静音');
    }
  }
}

class Progress extends Component {
  bar: Bar;
  dot: Dot;

  drag: Drag;

  constructor(player: RPlayer) {
    super(player);

    this.addClass('rplayer_action_volume_progress');

    this.bar = new Bar('rplayer_action_volume_bar');
    this.dot = new Dot('rplayer_action_volume_dot');

    const barWrapper = document.createElement('div');
    barWrapper.classList.add('rplayer_action_volume_bar_wrapper');
    barWrapper.appendChild(this.bar.dom);

    this.appendChild(barWrapper);
    this.appendChild(this.dot);

    this.drag = new Drag(this.dom, this.onDrag, this.onDrag);
  }

  onDrag = (ev: PointerEvent): void => {
    this.player.volume((ev.pageX - this.rect.x) / this.rect.width);
  };

  onVolumeChange(): void {
    const vol = this.player.volume();
    this.bar.set(vol);
    this.dot.setX(this.rect.width * vol);
  }

  onMounted(): void {
    this.onVolumeChange();
  }
}

class VolumeAction extends Component {
  icon: Icon;
  progress: Progress;

  constructor(player: RPlayer) {
    super(player, 'div', Events.VOLUME_CHANGE, Events.MOUNTED);

    this.addClass('rplayer_action_volume');

    this.icon = new Icon(player);
    this.progress = new Progress(player);

    this.appendChild(this.icon);
    this.appendChild(this.progress);
  }

  onVolumeChange(): void {
    this.icon.onVolumeChange();
    this.progress.onVolumeChange();
  }

  onMounted(): void {
    this.progress.onMounted();
  }
}

export default VolumeAction;