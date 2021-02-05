import React from "react";

class Detail extends React.Component {
  // static obj = this.props.location.state;

  // 리다이렉트 하는 코드
  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push("/");
    }
  }

  render() {
    const obj = this.props.location.state;
    // render가 componentDidMount보다 먼저 실행되므로, render에서도 조건문이 필요하다.
    if (obj === undefined) {
      return null;
    } else {
      return (
        <div>
          <img src={obj.coverImage} alt={obj.title} title={obj.title} />
          <h3>제목 : {obj.title}</h3>
          <p>발행 년도 : {obj.year}</p>
          <p>별점 : {obj.rating}</p>
          <p>상영 시간 : {obj.runtime}분</p>
          <ul>
            장르 :
            {obj.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
          <p>줄거리 : {obj.summary}</p>
        </div>
      );
    }
  }
}

export default Detail;
