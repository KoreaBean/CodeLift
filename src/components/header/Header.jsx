import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid m-3">
                    <a className="navbar-brand" href="#">Logo</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item  fs-5">
                                <a className="nav-link" href="#">설계 A ~ Z 까지</a>
                            </li>
                            <li className="nav-item  fs-5">
                                <Link className="nav-link" to="/course">설계 작성하기</Link>
                            </li>
                            <li className="nav-item  fs-5">
                                <a className="nav-link" href="#">내 프로젝트</a>
                            </li>
                            <li className="nav-item  fs-5">
                                <a className="nav-link" href="#">고객센터</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav  mb-2 mb-lg-0 justify-content-end">
                            <li className="nav-item  fs-5">
                                <a className="nav-link" href="#">로그인</a>
                            </li>
                            <li className="nav-item  fs-5">
                                <a className="nav-link" href="#">로그아웃</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}