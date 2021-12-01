class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  mostPopular() {
    return fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=24&key=AIzaSyCPbzL0dj-lklB6dc5L3qQ3Bl-E-_TkM8o',
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result => result.items);
  }
  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCPbzL0dj-lklB6dc5L3qQ3Bl-E-_TkM8o`,
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result =>
        result.items.map(item => ({ ...item, id: item.id.videoId }))
      );
  }
}

export default Youtube;
