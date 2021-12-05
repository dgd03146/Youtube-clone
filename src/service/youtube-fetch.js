class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  channel(videos, promises) {
    for (let i = 0; i < videos.length; i++) {
      const response = this.youtube
        .get('channels', {
          params: {
            part: 'snippet',
            maxResults: '36',
            id: videos[i].snippet.channelId,
          },
        })
        .then(result => result.data.items[0].snippet.thumbnails.default.url)
        .then(url => (videos[i].channelThumbnails = url));
      promises.push(response);
    }
    return promises;
  }

  async mostPopular() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=36&key=${this.key}`,
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result => result.items);
  }
  async search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result =>
        result.items.map(item => ({ ...item, id: item.id.videoId }))
      );
  }
}

export default Youtube;
