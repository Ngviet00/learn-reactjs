import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {

   const albumList = [
      {
         id: 1,
         name: 'Radio anh đâu phải anh ấy',
         thumbnailUrl:"https://photo-playlist-zmp3.zadn.vn/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDyymDv0KWH1ts_Vs5vL1nFSF8c53mC7ITrYsDvP25P0scZUtLa6KqlSSTAL2meL6TSwaDmu01uS_3o7a7P73r6mUvRGDWrAKR1xcD0s5KL7jNcTtZONG1BdUiYCD44J4BOhoeWrInKHj2gRsYeP01EuRCdHOLj98ADhnUPd41Hgj2Q9eNPGMY2Y9eUXT51KQ_9lY_qa0GDWzZtQgdLT0psXO8ho8Wq3FQTZsQKY3nnXuZ7Lut0SMpMqPugvHL09Dw7eMHun_LCABicQYBpa25PfdzdAf0&cv=1&size=thumb/240_240"
      },
      {
         id: 2,
         name: 'Radio tinh đầu ơi',
         thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzemDj01mH3tsxQsra20qRPROsE20PJ5urfYDjULbL1Z3oEYGjGKqQ89zAONrmL58DiaD5iLXuHg6g7dI8H3rpaBPRTCbjFNBGjaTrYHan6wogNtsDAJqMmAfVOOKj5HUKZcTaqJaD1i7NCYYv6LqEyCvw1PGGUSASqahPZJqCwi7dUyN8F1t2dUTtnBWy4Egzltg1yL0ni_Mc4e7G6NMYbEOAd8ra8E_KvrwOX1X9YuJZRu7CLLJQtReIwK_J3UekDx4JQRg2VIl7hMDY48e8HhQmEcp9z&cv=1&size=thumb/240_240'
      },
      {
         id: 3,
         name: 'Radio Quay lại lại yêu',
         thumbnailUrl:'https://photo-playlist-zmp3.zadn.vn/s1/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzfm8f01mH7ts-BtWm5KXJURDgC2047HDavtzXVML0JrcADZ5S91qVIVeQP1GL15TarnD0s3qeGyZFJd7X8Mrs-TCBSQW8PNUnqmzmu7Hv3k7V2YsfA6q2xAfNVFXPC4xWhduq_HK91joMTtIaM1XIxOy_MObHF9w1am-5a7n9jjocFfdLVL2UcATkc9ry0Q_Ctt_5sNW1kfJRVeITPKJdoOzln9WnIEQTdtAKcMXbXvcJGutH9NZMmCe-vKHu5Ri4B3thGEyIOWTYENn7OfblKes7N48Fw788wCdq&cv=1&size=thumb/240_240'
      }
   ]

   return (
      <div>
         <h1>Radio nổi bật</h1>
         <AlbumList albumList = {albumList}/>
      </div>
   );
}

export default AlbumFeature;