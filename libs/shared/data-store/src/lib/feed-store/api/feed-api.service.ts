import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeedApiService {
  constructor(private http: HttpClient) {}
  getFeed() {
    const limit = 20;
    const url = `https://www.reddit.com/r/TikTokCringe/.json?limit=${limit}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        const feed = [] as any;
        response.data.children.forEach((res: any) => {
          const videoUrl = res.data.media?.reddit_video?.fallback_url;
          if (videoUrl) {
            const comments = res.data.num_comments;
            const author = res.data.author;
            const id = res.data.id;
            const score = res.data.score;
            const title = res.data.title;
            const thumbnail = res.data.thumbnail;
            const tags = res.data.link_flair_text.split('/');
            feed.push({
              id,
              author,
              title,
              thumbnail,
              comments,
              videoUrl,
              score,
              tags,
            });
          }
        });
        return feed;
      })
    );
  }
}
