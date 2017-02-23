
declare var window;

@Injectable()
export class DevicePlugin {

  private _xxx = {
    fn01 : () => {
    }
  };

  get xxx() { return this._xxx; }

}
