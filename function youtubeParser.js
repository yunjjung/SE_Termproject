function youtubeParser(url, ...groups) {
    console.log(url);
    const container = `
      <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/#ID#" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      </div>`;
  
    return groups && groups[6].length == 11
      ? container.replace("#ID#", groups[6])
      : url;
  }
  
  const content = document.querySelector("#content");
  
  // 유튜브 URL 찾는 패턴
  const youtubeUrlExp = /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/g;
  const wrappedContent = content.innerHTML.replace(youtubeUrlExp, youtubeParser);
  
  content.innerHTML = wrappedContent;