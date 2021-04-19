import { EVENT } from 'src/ts/constants';
import { I18n, WEB_EXIT_FULL_SCREEN, WEB_FULL_SCREEN } from 'src/ts/features/i18n';
import { Icon } from 'src/ts/features/icons';
import { Player } from 'src/ts/player';
import {
  addDisposable, addDisposableListener, Component, hide, show,
} from 'src/ts/utils';
import { Tooltip } from 'src/ts/components/tooltip';
import { ControlItem } from '..';

class WebFullscreen extends Component implements ControlItem {
  private readonly exitIcon: HTMLElement;

  private readonly enterIcon: HTMLElement;

  tooltip!: Tooltip;

  constructor() {
    super();
    this.enterIcon = this.element.appendChild(Icon.webEnterFullscreen());
    this.exitIcon = this.element.appendChild(Icon.webExitFullscreen());
  }

  init(player: Player, tooltip: Tooltip) {
    this.tooltip = tooltip;
    if (player.webFullscreen.isActive) {
      this.enter();
    } else {
      this.exit();
    }
    addDisposable(this, player.on(EVENT.WEB_ENTER_FULLSCREEN, this.enter));
    addDisposable(this, player.on(EVENT.WEB_EXIT_FULLSCREEN, this.exit));
    addDisposableListener(this, this.element, 'click', player.webFullscreen.toggle);
  }

  private enter = (): void => {
    show(this.exitIcon);
    hide(this.enterIcon);
    this.tooltip.html = I18n.t(WEB_EXIT_FULL_SCREEN);
  }

  private exit = (): void => {
    hide(this.exitIcon);
    show(this.enterIcon);
    this.tooltip.html = I18n.t(WEB_FULL_SCREEN);
  }
}

const webFullscreenControlItem = () => new WebFullscreen();
webFullscreenControlItem.id = 'web-fullscreen';
export { webFullscreenControlItem };