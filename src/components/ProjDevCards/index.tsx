

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const ProjDevCards = [
  
  {
    name: 'Sangrah',
    image: 'https://opengraph.githubassets.com/e06ad3d66da79475e786d878f1972101a8fe7d2095ebce11ad7538969420a35e/kaustubhk24/sangrah',
    url: {
      page: 'https://github.com/kaustubhk24/sangrah',
    },
    description: 
       'React,docusarus'
    
  },
  {
    name: 'webOS-Apps-for-LG-TV',
    image: 'https://opengraph.githubassets.com/d7604acf259a093e1ee65d470b819c6ccbd50b76eae140f8f6b34027e1623aa2/kaustubhk24/webOS-Apps-for-LG-TV',
    url: {
      page: 'https://github.com/kaustubhk24/webOS-Apps-for-LG-TV',
    },
    description: 
       'HTML,CSS,JS,WebOS'
    
  },
  {
    name: 'Indian-Banks-Data',
    image: 'https://repository-images.githubusercontent.com/349454242/d82f6802-ff03-40dc-9191-d8107c51a5e8',
    url: {
      page: 'https://github.com/kaustubhk24/Indian-Banks-Data',
    },
    description: 
       'JSON,Excel'
    
  },
  {
    name: 'Convert-Google-Sheet-to-API',
    image: 'https://opengraph.githubassets.com/2e7a4bcda97d06aa8eb35f8f1437d51b2b7398d17979fe45968d51402cf8f1a9/kaustubhk24/Convert-Google-Sheet-to-API',
    url: {
      page: 'https://github.com/kaustubhk24/Convert-Google-Sheet-to-API',
    },
    description: 
       'JSON,Google Sheets'
    
  },
  {
    name: 'FREE-WhatsApp-Widget-for-Sites',
    image: 'https://opengraph.githubassets.com/e2c8ae2620d0982b1720c09eb4d026b50d417ea1e38187c44bde6da080f65465/kaustubhk24/FREE-WhatsApp-Widget-for-Sites',
    url: {
      page: 'https://github.com/kaustubhk24/FREE-WhatsApp-Widget-for-Sites',
    },
    description: 
       'JS, WhatsApp Widget, WhatsApp API, HTML,CSS,JS'
    
  },
  {
    name: 'FREE-Site-Status-Page',
    image: 'https://repository-images.githubusercontent.com/352630311/f364bb00-a2d9-11eb-8c2f-c8e6856efd93',
    url: {
      page: 'https://github.com/kaustubhk24/FREE-Site-Status-Page',
    },
    description: 
       'HTML,CSS,JS'
    
  },
  {
    name: 'Bank-Details-By-IFSC-code',
    image: 'https://opengraph.githubassets.com/4eb7bfbb8ab23bf6357d123664ad83357abcbe8beec3b2be3fc596a4fca0e2fe/kaustubhk24/Bank-Details-By-IFSC-code',
    url: {
      page: 'https://github.com/kaustubhk24/Bank-Details-By-IFSC-code',
    },
    description: 
       'HTML,CSS,JS,BootStrap,API'
    
  },
  {
    name: 'Android-View-Binding-Generator',
    image: 'https://opengraph.githubassets.com/ae9519c911a8ab83041cef20b10b7d13a9a22b5c0031928af056552855b83f42/kaustubhk24/Android-View-Binding-Generator',
    url: {
      page: 'https://github.com/kaustubhk24/Android-View-Binding-Generator',
    },
    description: 
       'HTML,CSS,JS,BootStrap,API'
    
  },
  {
    name: 'YouTube-Thumbnail-Downloader ',
    image: 'https://opengraph.githubassets.com/2f2215788d17c6a301da7aaa16604cfa2fa5d26ba6024df32c3096399664aeaa/kaustubhk24/YouTube-Thumbnail-Downloader',
    url: {
      page: 'https://github.com/kaustubhk24/YouTube-Thumbnail-Downloader',
    },
    description: 
       'HTML,CSS,JS,BootStrap,API'
    
  },
  {
    name: 'strip-tags-js',
    image: 'https://opengraph.githubassets.com/6f0eb0ac595b01de86eb6808707a19aa6dcaf948b9a676aad2205096d1b5eefd/kaustubhk24/strip-tags-js',
    url: {
      page: 'https://github.com/kaustubhk24/strip-tags-js',
    },
    description: 
       'HTML,CSS,JS,BootStrap'
    
  },

  {
    name: 'Add-QR-Code-on-Your-Site',
    image: 'https://opengraph.githubassets.com/f34606a670b15755ee3ed7f911e8b3caa833c7be35b7e52acae822350857a001/kaustubhk24/Add-QR-Code-on-Your-Site',
    url: {
      page: 'https://github.com/kaustubhk24/Add-QR-Code-on-Your-Site',
    },
    description: 
       'HTML,CSS,JS,BootStrap'
    
  },
  {
    name: 'simple-calculator',
    image: 'https://opengraph.githubassets.com/5d3ea70ae9709cb778efd316200d4c60e6ff20ba41ccc71b297d8bddcd7792e7/kaustubhk24/simple-calculator',
    url: {
      page: 'https://github.com/kaustubhk24/simple-calculator',
    },
    description: 
       'HTML,CSS,JS,BootStrap'
    
  },

  {
    name: 'Python-Telegram-Bots',
    image: 'https://opengraph.githubassets.com/79598e1dfd36e169642879e8027a7a9d285fbe9d43f21bca6a350caf83b3b8c2/kaustubhk24/Python-Telegram-Bots',
    url: {
      page: 'https://github.com/kaustubhk24/Python-Telegram-Bots',
    },
    description: 
       'Python, Telegram API'
    
  },
  {
    name: 'bank-htmls',
    image: 'https://opengraph.githubassets.com/bea75f483c7cc60db42cc8c8099c6eb4b5a21f015a10a27b90487c3bc254701f/kaustubhk24/bank-htmls',
    url: {
      page: 'https://github.com/kaustubhk24/bank-htmls',
    },
    description: 
       'HTML,CSS,JS'
    
  },
  {
    name: 'NumberToWords-Library',
    image: 'https://repository-images.githubusercontent.com/319528840/5b3d2080-a4e9-11eb-807b-aebc65e15a63',
    url: {
      page: 'https://github.com/kaustubhk24/NumberToWords-Library',
    },
    description: 
       'Android , Java'
    
  },
  {
    name: 'Audacity-Marathi-Competition-Website',
    image: 'https://opengraph.githubassets.com/7b3e635776561f09a3a048a0bc2fc2d57872287dd227909ef1e8db1fc7ed38f9/kaustubhk24/Audacity-Marathi-Competition-Website',
    url: {
      page: 'https://github.com/kaustubhk24/Audacity-Marathi-Competition-Website',
    },
    description: 
       'HTML,CSS,JS'
    
  },
  {
    name: 'Sudoku-Game-Javascript',
    image: 'https://opengraph.githubassets.com/5f2b44c8f657d00dd1cd3f33c29633bbf1886a624e242804c8b31a7b3ab5529c/kaustubhk24/Sudoku-Game-Javascript',
    url: {
      page: 'https://github.com/kaustubhk24/Sudoku-Game-Javascript',
    },
    description: 
       'HTML,CSS,JS'
    
  },

  {
    name: 'LMS-vb-6.0',
    image: 'https://opengraph.githubassets.com/b36f5558d93305eacee171121bd2602dbc394bedfa5b05654b498338b1464eb8/kaustubhk24/LMS-vb-6.0',
    url: {
      page: 'https://github.com/kaustubhk24/LMS-vb-6.0',
    },
    description: 
       'VB 6.0'
    
  },
  {
    name: 'PHP-Directory-Listing',
    image: 'https://opengraph.githubassets.com/bc7edd53f9546bbcc59829d08e1c260b50e92d75dbf870663f47fe268311ed14/kaustubhk24/PHP-Directory-Listing',
    url: {
      page: 'https://github.com/kaustubhk24/PHP-Directory-Listing',
    },
    description: 
       'PHP, HTML, CSS , JS, Bootstrap'
    
  },
  {
    name: 'Hospital-Management-System',
    image: 'https://opengraph.githubassets.com/cf0584f6c66aebfae8497b32ad4d30d8222ae553bfe3dea1ed08d6d07ac7adc6/kaustubhk24/Hospital-Management-System',
    url: {
      page: 'https://github.com/kaustubhk24/Hospital-Management-System',
    },
    description: 
       'VB'
    
  },
  {
    name: 'punavastu.github.io',
    image: 'https://opengraph.githubassets.com/b935021e86163c4e820b31d38e6309638ec3629f1d51504493c7787c81d3757c/kaustubhk24/punavastu.github.io',
    url: {
      page: 'https://github.com/kaustubhk24/punavastu.github.io',
    },
    description: 
       'HTML,CSS,JS,Bootstrap'
    
  },
  {
    name: 'text-diff',
    image: 'https://opengraph.githubassets.com/bea8625ef6a70a4ba58ba74eaf89e36113bc4c391f6dd28e571351f759735683/kaustubhk24/text-diff',
    url: {
      page: 'https://github.com/kaustubhk24/text-diff',
    },
    description: 
       'HTML,CSS,JS,Bootstrap'
    
  },
  {
    name: 'Insert-data-view-php',
    image: 'https://opengraph.githubassets.com/b886672ec1b1f3a034ad95c652738a30df17bb2e3aa3809f843b78f916fae9a8/kaustubhk24/Insert-data-view-php',
    url: {
      page: 'https://github.com/kaustubhk24/Insert-data-view-php',
    },
    description: 
       'PHP, HTML,CSS,JS,Bootstrap'
    
  },
  {
    name: 'hospital-management-system-vb-net-2008',
    image: 'https://opengraph.githubassets.com/3067caeecad5d05dd8793fd9cfd99f655c3c25a6ef41314a0967d73beae8e900/kaustubhk24/hospital-management-system-vb-net-2008',
    url: {
      page: 'https://github.com/kaustubhk24/hospital-management-system-vb-net-2008',
    },
    description: 
       'Microsoft Access, VB.NET'
    
  },

  {
    name: 'Online-Exam-in-Visual-Basic-6.0',
    image: 'https://opengraph.githubassets.com/b0854b6005a77afda1400c03cbe219f9f1e57c6ddcb828cc75a1d5b0c97b8a4f/kaustubhk24/Online-Exam-in-Visual-Basic-6.0',
    url: {
      page: 'https://github.com/kaustubhk24/Online-Exam-in-Visual-Basic-6.0',
    },
    description: 
       'Microsoft Access, VB 6.0'
    
  },

  {
    name: 'Transport-Management-System-vb-6.0',
    image: 'https://opengraph.githubassets.com/fdde525c224bd27747ff05c6738a3332b89962a1616607acb735a73ad0426fe6/kaustubhk24/Transport-Management-System-vb-6.0',
    url: {
      page: 'https://github.com/kaustubhk24/Transport-Management-System-vb-6.0',
    },
    description: 
       'Microsoft Access, VB 6.0'
    
  },
  {
    name: 'Grocery-Shop-Management-System',
    image: 'https://opengraph.githubassets.com/3694de7a353772c861eb2aaa73a2785a45ccffb4fd451af70d00b7e1e6aa6418/kaustubhk24/Grocery-Shop-Management-System',
    url: {
      page: 'https://github.com/kaustubhk24/Grocery-Shop-Management-System',
    },
    description: 
       'Microsoft Access, VB 6.0'
    
  },
  {
    name: 'Financial-Project',
    image: 'https://opengraph.githubassets.com/5f83ef686b0b6d70c22a03909ca8ef14c3aafc87c65fe2a2dcbcc45dde673aa5/kaustubhk24/Financial-Project',
    url: {
      page: 'https://github.com/kaustubhk24/Financial-Project',
    },
    description: 
       'Microsoft Access, VB.NET'
    
  },
  {
    name: 'Hotel-Management-System',
    image: 'https://opengraph.githubassets.com/f2c35267a1de36faf1324a07cbf27fb94ec68fb719110f9bfb16327fa75880f1/kaustubhk24/Hotel-Management-System',
    url: {
      page: 'https://github.com/kaustubhk24/Hotel-Management-System',
    },
    description: 
       'Microsoft Access, VB.NET'
    
  },



];

interface Props {
  name: string;
  image: string;
  url: {
    page?: string;
    codepen?: string;
  };
  description: JSX.Element;
}

function ProjDevCard({ name, image, url, description }: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <center>
        <div className={clsx('card__imge')}>
          <Link to={url.page}>
            <img src={image}></img>
          </Link>
        </div>
        </center>

        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
          
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjDevCardsRow(): JSX.Element {
  return (
    <div className="row">
      {ProjDevCards.map((special) => (
        <ProjDevCard key={special.name} {...special} />
      ))}
    </div>
  );
}
