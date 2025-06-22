import { Currency, type ProductData } from '../types';
import uuid from 'react-uuid';

const currencies: Currency[] = [Currency.USD, Currency.EUR, Currency.RUB];
const imgUrls: string[] = [
   'https://avatars.mds.yandex.net/i?id=37fab935b13299a207ee50153cca5501_l-5874987-images-thumbs&n=13',
   'https://avatars.mds.yandex.net/i?id=29c75d7671b5a133c372ba7cad5311c0_l-4289925-images-thumbs&n=13',
   'https://yandex-images.clstorage.net/5fB1ti164/45cfe0cEip/tOk-AvomPQCmU4BnlnQV5lBkhdx_ZDq-xMcp9oHKHXSgjze8X_ZySPIIjALQGokDPCBcGJSixU7oTnXzszwE_vGwL069ZCRb9xKdM553EORNOcbNYz4-496FevPTnXIe0PtH0HOQXmrfdsxR3BzVGnM0EH_-ttIVvDUJ5MMFMaSv3g4UzzxkHo535HeicCTqQBuZ_EUkPuTK7HeYse9lAvDWUPV0pn5M82DQW9kZxBs4AAlkxv7HOKk6LvzVLAiGq_AdMeoHWQSoRudLn04d52oZhdVcMQDr5PpVrIXpWRjj11XIVIVQTsV3_UjoN_I3BwALauvcySyiMiTB4C8im6P5DxrtEGUrkVTKUplgEOpsAYjTSQEp98z3V62H6VoP0NdOxnKSb0DvXvZc4ALHBCgsMFHEx_YqlA4D2OUUN6618BMExw9gIo5NzHmNXwHafgud6G4pMcTJ21KKkupmDNTAVc52u1pf4FLlUvcR8RoMCSdX2-DzDZ8AOdbbGD6mj8Q5Mtk5RyatSNpNkmsQ2X0GnuhzBxvV7MZwlLDGWQzL4nbDS41fbsZg3FvHMvINPiE8ZtfC0yuMHzbB5S03rYHcLiTYJmoEgXXkf4VZG8ZhPZj-QTMj8erueL2H4kog9Mty2l-LUkDzXOd_3zfRDysFI2v7-O4FsTMm-ss-A4uKySIH3j1XCa9nxVKyXx_aTQuD-EA_OMnA03mWjO96J9nZT-tEqm1g4nHUXf821ggKACZ44tT3GK4DK-_BHQCpi-4GJcc0YQqOdv13tUkb62IZufhvDTTK69NHu6vJbDHUyU7If7JcXd9u5kP6DNIANygBQ-bjzDmSDSn1wzk2i4jYKDHJHkAUhE30cIdYBehKLYr3TAcc4M_2U5ej3Gg72PdH1m-AbWT6b8JJ3w_7BTE0LGXu0uoIqzgDwcYuKIWl-RAC2ARAO6dB1nm6ewTgcDqBzEcuA-j37FOfrsg',
   'http://cdn1.ozone.ru/s3/multimedia-3/6416000739.jpg',
];

export const generateMockDatas = (count: number) => {
   const response: ProductData[] = [];

   for (let i = 0; i < count; i++) {
      response.push({
         id: uuid(),
         title: `Nike X${i}Y`,
         origin: 'California',
         price: Math.floor(Math.random() * 100_000),
         currency: currencies[Math.floor(Math.random() * currencies.length)],
         imageUrl: imgUrls[Math.floor(Math.random() * imgUrls.length)],
      });
   }

   return response;
};
