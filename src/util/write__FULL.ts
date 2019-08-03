import { NFC, KEY_TYPE_A } from 'nfc-pcsc';
import { writeFileSync, readFileSync, read } from 'fs';

const parseBytes = (name, data, length) => {

	if (!(data instanceof Buffer) && typeof data !== 'string') {
		throw new Error(`${name} must an instance of Buffer or a HEX string.`);
	}

	if (Buffer.isBuffer(data)) {

		if (data.length !== length) {
			throw new Error(`${name} must be ${length} bytes long.`);
		}

		return data;

	}

	if (typeof data === 'string') {

		if (data.length !== length * 2) {
			throw new Error(`${name} must be a ${length * 2} char HEX string.`);
		}

		return Buffer.from(data, 'hex');

	}

	throw new Error(`${name} must an instance of Buffer or a HEX string.`);

};

const nfc = new NFC();
const main = () => {
  nfc.on('reader', reader => {

    console.log(`${reader.reader.name}  device attached`);

    // enable when you want to auto-process ISO 14443-4 tags (standard=TAG_ISO_14443_4)
    // when an ISO 14443-4 is detected, SELECT FILE command with the AID is issued
    // the response is available as card.data in the card event
    // see examples/basic.js line 17 for more info
    // reader.aid = 'F222222222';

    reader.on('card', async card => {

        // card is object containing following data
        // [always] String type: TAG_ISO_14443_3 (standard nfc tags like MIFARE) or TAG_ISO_14443_4 (Android HCE and others)
        // [always] String standard: same as type
        // [only TAG_ISO_14443_3] String uid: tag uid
        // [only TAG_ISO_14443_4] Buffer data: raw data from select APDU response

        console.log(`${reader.reader.name}  card detected`, card);
        //const toWrite = readFileSync(__dirname + '/../enc_custom/2_REG_FALCON.bin');

        // https://games.kel.mn/amiibo/
        const toWrite = Buffer.from([
          0x04, 0x27, 0x69, 0xc2,
0x82, 0x83, 0x5c, 0x80,
0xdd, 0x48, 0x00, 0x00,
0xf1, 0x10, 0xff, 0xee,
0xa5, 0x81, 0x43, 0x00,
0x14, 0x6e, 0xd9, 0x02,
0xc1, 0x64, 0x12, 0xe0,
0x9a, 0x81, 0x07, 0x46,
0x43, 0x37, 0xcc, 0x6b,
0x2a, 0x76, 0xfb, 0x41,
0xd2, 0x40, 0xef, 0x25,
0xf0, 0x0b, 0xaf, 0x1e,
0xa0, 0xe3, 0x33, 0x78,
0x13, 0x2a, 0x8c, 0xd1,
0x69, 0x9d, 0x4e, 0x84,
0x15, 0xa5, 0x56, 0x86,
0xe6, 0xd0, 0x17, 0x46,
0x9b, 0x37, 0x4a, 0x4f,
0x21, 0x4a, 0x3c, 0x60,
0x0e, 0x49, 0xea, 0xe3,
0x0b, 0x4c, 0xdd, 0xde,
0x19, 0x19, 0x00, 0x00,
0x00, 0x09, 0x00, 0x02,
0x05, 0x12, 0x94, 0x0c,
0xac, 0x50, 0x1b, 0xac,
0x1a, 0xa7, 0xb2, 0xce,
0x20, 0x4b, 0xb4, 0x31,
0x29, 0xc9, 0x04, 0x93,
0x19, 0xda, 0xd7, 0x03,
0x86, 0xad, 0x00, 0x30,
0x93, 0xd2, 0xf9, 0x23,
0x64, 0x65, 0x43, 0x23,
0x3a, 0xbc, 0xd8, 0x4d,
0x46, 0xee, 0xa1, 0x3e,
0x14, 0x1f, 0x7d, 0x3c,
0x51, 0x19, 0x8f, 0x59,
0xe0, 0x91, 0xf7, 0x32,
0x47, 0xcb, 0xe7, 0x89,
0xd7, 0x6a, 0x6f, 0x08,
0xe3, 0x11, 0x66, 0xe6,
0x93, 0xcd, 0x66, 0x4f,
0xca, 0x86, 0x35, 0xff,
0x8b, 0x6b, 0x11, 0xc2,
0xc6, 0x68, 0xbd, 0x4f,
0x63, 0xab, 0x5f, 0x5d,
0xaa, 0x53, 0xe1, 0xc7,
0x72, 0x12, 0xd1, 0xa6,
0x1c, 0x0a, 0x85, 0x6a,
0x52, 0x88, 0x51, 0x86,
0xdb, 0x8a, 0xbf, 0x47,
0xe9, 0x82, 0xf1, 0xed,
0x60, 0x50, 0xdb, 0xb6,
0x13, 0x62, 0x38, 0x78,
0xa3, 0xea, 0x99, 0xba,
0xdc, 0x8f, 0x4c, 0xe9,
0x8b, 0x12, 0x5f, 0x75,
0x62, 0xcd, 0x17, 0xb8,
0xfd, 0x67, 0xab, 0x17,
0xe9, 0xe6, 0x32, 0x9c,
0xa1, 0xa2, 0x46, 0x07,
0x3e, 0x5f, 0x41, 0xdf,
0xbc, 0x92, 0x25, 0xcf,
0x24, 0xff, 0x35, 0x06,
0xcf, 0xe4, 0xb8, 0x6e,
0x0c, 0xdc, 0x02, 0xdf,
0x1c, 0xb7, 0x80, 0x8f,
0x01, 0x91, 0xc6, 0xb1,
0x55, 0x68, 0x8f, 0x14,
0x23, 0x59, 0x4d, 0xaf,
0xe2, 0xa5, 0x80, 0xf9,
0xfb, 0xe8, 0x90, 0xf1,
0xeb, 0xc3, 0xa6, 0x40,
0x06, 0x58, 0x5b, 0xe5,
0x43, 0x01, 0xa0, 0xe4,
0x37, 0x63, 0xc0, 0x2d,
0x35, 0x97, 0x48, 0x15,
0x41, 0x59, 0x5c, 0xf0,
0x51, 0x3d, 0x8c, 0x35,
0x34, 0x49, 0xf9, 0xc6,
0x90, 0x46, 0x6a, 0xb9,
0xbb, 0xee, 0x6c, 0xb9,
0x19, 0x32, 0x44, 0x4f,
0x5d, 0x35, 0x6c, 0x16,
0x4e, 0x8d, 0x4b, 0xdc,
0x71, 0xfb, 0x5f, 0x3d,
0xe5, 0x6e, 0xdd, 0x21,
0x6d, 0x2d, 0xdb, 0x67,
0x6f, 0x01, 0x72, 0x53,
0x6d, 0x6a, 0x96, 0x6f,
0x17, 0x5a, 0x30, 0x09,
0x6a, 0xa4, 0xa5, 0xe8,
0xb7, 0xb6, 0xc5, 0xfa,
0xbc, 0xbd, 0x6c, 0xb0,
0x29, 0x84, 0xf9, 0xe3,
0x2f, 0x0b, 0x43, 0x2a,
0x35, 0x37, 0x8e, 0x43,
0x87, 0x4d, 0x9b, 0xb0,
0x1d, 0xe0, 0xe6, 0x73,
0xd4, 0x64, 0xd2, 0x3c,
0x4c, 0x5b, 0x1f, 0x5a,
0x4d, 0x4c, 0xba, 0xfe,
0x90, 0x2b, 0xea, 0x07,
0xb6, 0xaf, 0x49, 0x10,
0xb2, 0x66, 0xc5, 0x7b,
0x09, 0xd6, 0xe3, 0x22,
0xeb, 0x4d, 0x2e, 0x3b,
0xc9, 0x30, 0x78, 0x78,
0x81, 0xa0, 0x3f, 0x75,
0x7a, 0x09, 0xce, 0x35,
0x67, 0xba, 0xaa, 0x4c,
0x64, 0xc0, 0x1e, 0xb3,
0x3c, 0x86, 0x1b, 0xa5,
0xda, 0x21, 0x2a, 0x43,
0xac, 0x48, 0x9c, 0x17,
0x6b, 0x04, 0x45, 0xf5,
0xa5, 0xb3, 0xb0, 0x42,
0x98, 0xec, 0xe1, 0xa9,
0x04, 0x0a, 0xea, 0xa4,
0x13, 0x1f, 0xd0, 0x06,
0x1e, 0x37, 0xa7, 0x70,
0xa2, 0x82, 0x56, 0x07,
0x66, 0x8e, 0xc6, 0xae,
0x52, 0x11, 0xde, 0x2f,
0x71, 0x5a, 0xec, 0x2e,
0x43, 0x04, 0x12, 0xb1,
0xb4, 0x24, 0x4e, 0x49,
0x56, 0x55, 0xc1, 0x39,
0xf2, 0xf0, 0x3d, 0x02,
0xc2, 0xf3, 0x18, 0x29,
0x08, 0x53, 0x7a, 0xf1,
0x00, 0x00, 0x00, 0xbd,
0x00, 0x00, 0x00, 0x04,
0x5f, 0x00, 0x00, 0x00,
0x0f, 0xbf, 0x74, 0x56,
0x80, 0x80, 0x00, 0x00
        ]);

        toWrite[10] = 0x0F;
        toWrite[11] = 0xE0;
        toWrite[0x208] = 0x01;
        toWrite[0x20A] = 0x0F;
        // Buffer.from([0x19, 0xAC, 0x00, 0x00, 0x00, 0x01, 0x00, 0x02]).copy(toWrite, 0x54);

        // const toWrite = Buffer.alloc(540);
        const password = parseBytes('Password', 'FFFFFFFF', 4);
        const cmd = Buffer.from([
          0xff, // Class
          0x00, // Direct Transmit (see ACR122U docs)
          0x00, // ...
          0x00, // ...
          0x07, // Length of Direct Transmit payload
          // Payload (7 bytes)
          0xd4, // Data Exchange Command (see PN533 docs)
          0x42, // InCommunicateThru
          0x1b, // PWD_AUTH
          ...password,
        ]);

        const response = await reader.transmit(cmd, 7);

        reader.logger.debug('pwd_auth response', response);

        if (response.length < 5) {
          console.log('invalid_response_length', `Invalid response length ${response.length}. Expected minimal length was 2 bytes.`)
          process.exit();
        }

        if (response[2] !== 0x00 || response.length < 7) {
          console.log('invalid_password', `Authentication failed. Might be invalid password or unsupported card.`);
          process.exit();
        }

        // console.log(toWrite.slice(0x04 * 4, 0x0E * 4));
        try {
          // await reader.write(0x02, toWrite.slice(0x02 * 4, 0x4 * 4), 4)
          //await reader.write(0x04, toWrite.slice(0x04 * 4, 0x0D * 4), 4)
          //await reader.write(0x20, toWrite.slice(0x20 * 4, 0x29 * 4), 4)
          //await reader.write(0x29, toWrite.slice(0x29 * 4, 0x32 * 4), 4)
          console.log('writing data')
          await reader.write(0x4, toWrite.slice(0x04 * 4, 0x82 * 4), 4)
          console.log('writing last chunk')
          await reader.write(0x82, toWrite.slice(0x82 * 4, 0x88 * 4), 4);
          console.log('writing first chunk')
          console.log('first chunk p4...')
          await reader.write(0x3, toWrite.slice(0x03 * 4, 0x04 * 4), 4);
          console.log('first chunk p3...')
          await reader.write(0x2, toWrite.slice(0x02 * 4, 0x03 * 4), 4);
          console.log('first chunk p1...')
          await reader.write(0x0, toWrite.slice(0x00 * 4, 0x01 * 4), 4);

          console.log('written!');
        }
        catch (e) {
          console.log(e.message);
          process.exit();
        }
    });

    reader.on('card.off', card => {
        console.log(`${reader.reader.name}  card removed`, card);
    });

    reader.on('error', err => {
        console.log(`${reader.reader.name}  an error occurred`, err);
    });

    reader.on('end', () => {
        console.log(`${reader.reader.name}  device removed`);
    });

  });

  nfc.on('error', err => {
    console.log('an error occurred', err);
  });
}

export default main;

main();