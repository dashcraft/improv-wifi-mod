import BLEServer from "bleserver";
import { SERVICE_UUID } from "./consts";
export default class ImprovWifi extends BLEServer {
  deviceName;
  constructor({ deviceName, deployServices }) {
    super(deployServices);
    this.deviceName = deviceName;
  }
  startImprov() {
    let improvParams = {
      connectable: true,
      discoverable: true,
      advertisingData: {
        flags: 6,
        completeName: this.deviceName,
        serviceDataUUID16: SERVICE_UUID,
        completeUUID16List: [uuid`180D`, uuid`180F`],
      },
    };
    this.startAdvertising(improvParams);
  }
  onCharacteristicWritten(characteristic, value) {
    trace("value:", value, "\n");
  }
}
