import { useEffect } from 'react';

export default function Posts() {
  const download = () => {
   
    fetch('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    AsfalixService.getInsurers().then((data) => {
      setInsurers(data.data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <a
        download
        onClick={() => download()}
      >
        <i className="fa fa-download" />
        download
      </a>
    </div>
  )
}
