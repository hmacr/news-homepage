import newsData from '../assets/news_data.json';
import articleData from '../assets/article_data.json';

export class NewsData {
  heading!: string;
  subText!: string;
  addBorderBottom!: boolean;
}

export function loadNewsData(): Array<NewsData> {
  const loadedData = newsData.map(data => {
    const news = new NewsData();
    news.heading = data.heading;
    news.subText = data.sub_text;
    news.addBorderBottom = false;
    return news;
  });
  for (let i = 0; i < loadedData.length - 1; i++) {
    loadedData[i].addBorderBottom = true;
  }
  return loadedData;
}

export class ArticleData {
  serialNo!: string;
  heading!: string;
  subText!: string;
  imgSrc!: string;
}

export function loadArticleData(): Array<ArticleData> {
  return articleData.map(data => {
    const imgSrc = new URL(data.img_src, import.meta.url).href;
    const article = new ArticleData();
    article.serialNo = data.serial_no;
    article.heading = data.heading;
    article.subText = data.sub_text;
    article.imgSrc = imgSrc;
    return article;
  });
}
