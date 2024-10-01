document.getElementById('loadArticlesBtn').addEventListener('click', function () {
    const articles = [
        {
            "source": { "name": "Tech Xplore" },
            "author": "Science X",
            "title": "Google to invest $1 billion in Thailand",
            "description": "Google plans to invest $1 billion to build digital infrastructure in Thailand, including a new data center, the US tech giant has announced, saying the move would support 14,000 jobs in the kingdom.",
            "url": "https://techxplore.com/news/2024-10-google-invest-billion-thailand.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2024/google.jpg",
            "publishedAt": "2024-10-01T08:35:33Z",
        },
        {
            "source": { "name": "Investing.com" },
            "author": "Investing.com",
            "title": "Goldman cites Ford stock rally with high-margin business and 6% dividend yield",
            "description": "Goldman cites Ford stock rally with high-margin business and 6% dividend yield",
            "url": "https://www.investing.com/news/company-news/goldman-cites-ford-stock-rally-with-highmargin-business-and-6-dividend-yield-93CH-3641997",
            "urlToImage": "https://i-invdn-com.investing.com/redesign/images/seo/investing_300X300.png",
            "publishedAt": "2024-10-01T08:18:22Z",
        },
        {
            "source": { "id": null, "name": "GlobeNewswire" },
            "author": "Research and Markets",
            "title": "Automotive OEM Telematics Research Report 2024-2030",
            "description": "3/4 Cars Sold in 2023 were Equipped with Embedded Telematics System, Apple CarPlay and Android Auto Driving Uptake of Smartphone Integration.",
            "url": "https://www.globenewswire.com/news-release/2024/10/01/2955832/28124/en/Automotive-OEM-Telematics-Research-Report-2024-2030-3-4-Cars-Sold-in-2023-were-Equipped-with-Embedded-Telematics-System-Apple-CarPlay-and-Android-Auto-Driving-Uptake-of-Smartphone-.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7",
            "publishedAt": "2024-10-01T08:04:00Z",
            "content": "Dublin, Oct. 01, 2024 (GLOBE NEWSWIRE) -- The \"The Global Automotive OEM Telematics Market 9th Edition\" report has been added to ResearchAndMarkets.com's offering."
        },
        {
            "source": { "id": null, "name": "GlobeNewswire" },
            "author": "Research and Markets",
            "title": "Humanoid Robots Global Market Report 2025-2035",
            "description": "Market Evolution, Current State and Future Trajectory.",
            "url": "https://www.globenewire.com/news-release/2024/10/01/2955829/28124/en/Humanoid-Robots-Global-Market-Report-2025-2035-Market-Evolution-Current-State-and-Future-Trajectory.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7",
            "publishedAt": "2024-10-01T08:02:00Z",
            "content": "Dublin, Oct. 01, 2024 (GLOBE NEWSWIRE) -- The \"Humanoid Robots Global Market 2025-2035: Technologies, Markets and Companies\" report has been added to ResearchAndMarkets.com's offering."
        },
        {
            "source": { "id": "the-times-of-india", "name": "The Times of India" },
            "author": "ET Online",
            "title": "Taking a sick leave? Think twice as company officials visit employee homes to check",
            "description": "Tesla is facing backlash in Germany after sending managers to visit the homes of employees on sick leave at its Berlin Gigafactory.",
            "url": "https://economictimes.indiatimes.com/magazines/panache/taking-a-sick-leave-think-twice-as-company-officials-visit-employee-homes-to-check/articleshow/113841205.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-113842551,width-1200,height-630,imgsize-1391519,overlay-etpanache/photo.jpg",
            "publishedAt": "2024-10-01T07:40:19Z",
            "content": "Tesla's management in Germany has come under scrutiny for visiting the homes of employees on sick leave in an effort to curb absenteeism."
        },
        {
            "source": { "id": null, "name": "Securityaffairs.com" },
            "author": "Pierluigi Paganini",
            "title": "North Korea-linked APT Kimsuky targeted German defense firm Diehl Defence",
            "description": "North Korea-linked APT Kimsuky has been linked to a cyberattack on Diehl Defence.",
            "url": "https://securityaffairs.com/169162/apt/kimsuky-apt-hit-diehl-defence.html",
            "urlToImage": "https://securityaffairs.com/wp-content/uploads/2015/03/north-korea-hackers.jpg",
            "publishedAt": "2024-10-01T07:04:02Z",
            "content": "North Korea-linked APT Kimsuky targeted German defense firm Diehl Defence."
        },
        {
            "source": {"id": "business-insider","name": "Business Insider"},
            "author": "Tom Carter",
            "title": "3 of China's Tesla rivals had a record month, putting pressure on Elon Musk",
            "description": "Chinese EV makers Zeekr, Xpeng, and Li Auto announced record deliveries for September, intensifying competition for Tesla in the crucial China market.",
            "url": "https://www.businessinsider.com/tesla-chinese-ev-rivals-record-deliveries-pressure-on-elon-musk-2024-10",
            "urlToImage": "https://i.insider.com/66fbc1607518aa57bc9f8ee1?width=1200&format=jpeg",
            "publishedAt": "2024-10-01T10:04:03Z",
            "content": "The cheapest version of Xpeng's Mona M03 is nearly half the price of Tesla's Model 3 in China.VCG/Getty Images\r\n<ul><li>Chinese Tesla rivals Zeekr, Xpeng, and Li Auto announced record monthly deliver… [+2333 chars]"
        },
        {
            "source": {"id": null,"name": "Forbes"},
            "author": "Chase Peterson-Withorn, Forbes Staff, \n Chase Peterson-Withorn, Forbes Staff\n https://www.forbes.com/sites/chasewithorn/",
            "title": "The 2024 Forbes 400: The 25 Wealthiest People In America",
            "description": "It’s never been better to be a super-billionaire.",
            "url": "https://www.forbes.com/sites/chasewithorn/2024/10/01/the-2024-forbes-400-the-25-wealthiest-people-in-america/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66fae13b6c5d149dfd67f75f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-10-01T10:00:00Z",
            "content": "Its never been better to be a super-billionaire.\r\nItwas another great year to be rich, especially for the select few at the very top. With markets roaring, nearly all of the 25 wealthiest people in A… [+13919 chars]"
        },
        {
            "source": {"id": null,"name": "The New Republic"},
            "author": "Gil Duran",
            "title": "The Most Powerful Crypto Bro in Washington Has Very Weird Beliefs",
            "description": "Brian Armstrong has become a familiar face—or should we say pate—in the U.S. Capitol. The 41-year-old billionaire CEO of Coinbase, the nation’s largest cryptocurrency exchange by a country mile, has regularly traveled to Washington since at least 2018 to lobb…",
            "url": "https://newrepublic.com/article/185738/coinbase-brian-armstrong-crypto-lobbying-washington-politicians",
            "urlToImage": "https://images.newrepublic.com/f5d25182c071acd4c4fdbfa9139789ddd2d4c6c2.jpeg?w=1200&h=630&crop=faces&fit=crop&fm=jpg",
            "publishedAt": "2024-10-01T10:00:00Z",
            "content": "The guy with the Tesla chip in his hand is Patri Friedman, a grandson of the economist Milton Friedman the founder of Pronomos Capital, one of Prósperas funders.The company, backed by tech billionair… [+1274 chars]"
        },
        {
            "source": {"id": null,"name": "Forbes"},
            "author": "Phoebe Liu, Forbes Staff, \n Phoebe Liu, Forbes Staff\n https://www.forbes.com/sites/phoebeliu/",
            "title": "The Forbes Philanthropy Score 2024: How Charitable Are America’s Richest People?",
            "description": "The wealthiest Americans have gotten nearly $1 trillion richer this year,. Are they getting more generous?",
            "url": "https://www.forbes.com/sites/phoebeliu/2024/10/01/the-forbes-philanthropy-score-2024-how-charitable-are-americas-richest-people/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66faef37c91a25e15881ab1e/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-10-01T10:00:00Z",
            "content": "The 400 richest people in America have doled out some $287 billion in charitable giving over their lifetimes, to causes including climate change, education and space-based solar power. Yet, overall, … [+7696 chars]"
        },

    ];

    

    const articlesContainer = document.getElementById('articlesContainer');
    articlesContainer.innerHTML = ''; // Clear any existing content

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p><strong>Author:</strong> ${article.author}</p>
            <p><strong>Source:</strong> ${article.source.name}</p>
            <p>${article.description}</p>
            <img src="${article.urlToImage}" alt="${article.title}">
            <p><a href="${article.url}" target="_blank">Read more</a></p>
        `;

        articlesContainer.appendChild(articleDiv);
    });
});
