import {Link} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <div className="container">
                <div className="home1_div" >
                    <div className="home1_img">
                    </div>
                    <div className="home1_content">
                        <span><h2>소프트웨어 개발의 새로운 시작, "CodeLift"와 함께</h2></span>
                        <div>
                            <span>프로젝트의 복잡한 관리와 긴 개발 시간, 이제는 "CodeLift"와 함께 효율적으로 관리하세요.<br/></span>
                            <span>더 이상 어렵고 복잡하게 느껴지는 프로젝트 관리에 스트레스 받지 마세요. 우리 'CodeLift' 가 여러분의 프로젝트를 든든하게 지원할게요.</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2><span>CodeLift로 여러분은..</span></h2>
                    </div>
                    <div>
                        <span>프로젝트 관리부터 문서화, 코드 리뷰까지 원하는 서비스를 쉽고 편하게 이용할 수 있어요</span><br/>
                        <span>버튼 한 번 클릭으로 모든 관리 작업이 진행됩니다. 간편하죠?</span><br/>
                        <span>효율적인 관리를 통해 프로젝트의 품질을 높여보세요!</span>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="#" alt="home2"/>
                    </div>
                    <div>
                        <div>
                            <h2><span>당신의 프로젝트가 바로, 우리의 가장 큰 관심사입니다!</span></h2>
                        </div>
                        <div>
                            <span>프로젝트라는 도전 앞에 선 모든 개발자들에게 "CodeLift"는 최고의 파트너가 되어 드릴 것을 약속드립니다.</span>
                            <span>지금까지 쌓아온 전문성과 효율성으로 여러분만의 프로젝트를 완성시켜 드리겠습니다.</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="#" alt="home3"/>
                    </div>
                    <div>
                        <div>
                            <span>진심을 다해 여러분의 프로젝트를 지원하고 싶어요.</span>
                            <span>"CodeLift"와 함께라면, 여러분의 프로젝트 관리는 더 이상 어렵지 않습니다.</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h3>우리와 함께라면 여러분의 프로젝트는 이미 완벽합니다.</h3>
                        <h3>"CodeLift"에서 여러분의 성공적인 프로젝트를 기대하세요!</h3>
                    </div>
                </div>
                <div >
                    <ul className="mb-2 mb-lg-0 justify-content-center">
                        <li><button className="btn btn-success">프로젝트 가이드 보기</button></li>
                        <li> <button className="btn btn-success">프로젝트 시작하기</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}