Army Form
===


<p align="center">
    <img src="ArmyForm_Logo.png" width="300" height="300" />
    <br/>
    <img src="https://img.shields.io/badge/version-v1.0.0-orange" alt="version"/>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT"></a>
    <a href="https://github.com/osamhack2021/Web_ArmyForm_LFDF/actions"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/osamhack2021/Web_ArmyForm_LFDF/Build%20&%20deploy"></a>
</p>

## 프로젝트 소개
 > Army Form은 용사들이 부대를 직접 만들어 나간다는 의미를 담고 있는 프로젝트입니다. 
 > 
 > 최근 이슈가 된 병영 식당을 선두로 해서 많은 용사들이 부대에 갖고 있던 건의사항을 듣고, 이를 각 부대 지휘관에게 효율적으로 전달할 수 있는 어플리케이션 개발을 목표로 하고 있습니다. 
 > 
 > 군 부대에서 사용하기 적합하고 광범위한 용도에 설문조사 프로그램입니다.


## 기능 설명
   ### 1. 메인페이지  
   
   <img src="./readme_img/mainpage.png" alt="메인페이지" width="600" height="500" />
   
   - 진행중인 설문 : 현재 속한 부대에서 진행하고 있는 설문조사를 확인 또는 참여할 수 있습니다.  
   - 설문 결과 : 자신이 참여한 설문조사가 완료되었는지 또는 결과를 볼 수 있습니다.  
     (예 : 화장실에 휴지 비치 요망 -> 조만간 화장지를 비치하겠습니다.)  
   - 제작한 설문 : 자신이 만들었던 설문조사를 확인 또는 수정할 수 있습니다.  
   
   ### 2. 설문조사 생성하기  
   
   <img src="./readme_img/surveycreate.png" alt="설문조사 생성 페이지" width="800" height="450" />
   
   - 다양한 폼(객관식, 주관식, 이미지 등)을 제공하여 쉽게 여러 종류의 설문조사를 생성할 수 있습니다.
   - 익명성을 제공하기 위해서 익명 또는 비익명 설문를 선택할 수 있습니다.
   - 설문조사의 제출 기한을 정할 수 있습니다.


   ### 3. 설문조사 참여하기 
   
   <img src="./readme_img/survey.png" alt="설문조사 참여 페이지" width="800" height="450" />
   
   - 제출 기한 내 답변 제출을 하지 않는다면 언제든지 수정이 가능합니다.
   - 최종적으로 답변 제출을 누르게 되면 설문이 제출됩니다.
   
   ### 4. 설문조사 결과보기
   
   <img src="./readme_img/surveyresult.png" alt="설문조사 결과 페이지" width="800" height="450" />
   
   - 답변이 필요한 설문조사의 경우 답변을 입력하여 설문조사를 참여한 장병들에게 조치 내용을 알릴 수 있습니다.
     (예시 : 화장실에 화장지를 배치하겠습니다. -> 장병들이 어떠한 조치를 하겠다는 내용을 확인할 수 있습니다.)
   - 각 질문 형태에 알맞는 결과를 보여줍니다.
     (예시 : 선택형 질문 -> 막대 그래프 / 주관식 질문 -> 워드클라우드 또는 각 질문에 대한 퍼센트치)
   
   ### 5. 대쉬보드 페이지
   
   <img src="./readme_img/dashboard.png" alt="대쉬보드 페이지" width="800" height="450" />
   
   - 전체적인 내용을 한 번에 확인할 수 있습니다.

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
 - Node.js (v14.17.6)을 지원하는 운영 체제 [Node.js 다운로드](https://nodejs.org/download/release/v12.22.6/)
 - ES6 이상 지원하는 브라우저

## 기술 스택 (Technique Used) 

### Server(back-end)
 - node.js : 14.17.6
 - express.js : ^4.17.1
 
### Front-end
 - react.js : ^17.0.24

## 설치 안내 (Installation Process)
- 기본적으로 Node.js 의 설치가 필요합니다.
    ```bash
        $ curl -fsSL https://deb.nodesource.com/setup_12.x | sudo -E bash -
        $ sudo apt install -y nodejs
    ```
- Frontend 빌드
    ```bash
        $ cd frontend
        $ npm run build
    ```

## 프로젝트 사용법 (Getting Started)
- Api 서버 실행
    ```bash
        $ cd backend
        $ npm install
        $ npm run build
        $ npm start
    ```
 
## 팀 정보 (Team Information)
이름 | 역할 | Github ID | E-mail
----- | ----- | ----- | -----
민승기 | backend 총괄 | <a href="https://github.com/ironore15"><img src="http://img.shields.io/badge/ironore15-green?style=social&logo=github"/></a> | <a href="mailto:ironore15@gmail.com"><img src="https://img.shields.io/badge/ironore15@gmail.com-green?logo=gmail&style=social"/></a>
이형창 | frontend 총괄 | <a href="https://github.com/AnOldStory"><img src="http://img.shields.io/badge/AnOldStory-green?style=social&logo=github"/></a> | <a href="mailto:AnOldStory@gmail.com"><img src="https://img.shields.io/badge/AnOldStory@gmail.com-green?logo=gmail&style=social"/></a>
홍태성 | backend api 제작 | <a href="https://github.com/tshong3"><img src="http://img.shields.io/badge/tshong3-green?style=social&logo=github"/></a> | <a href="mailto:tshong1002@gmail.com"><img src="https://img.shields.io/badge/tshong1002@gmail.com-green?logo=gmail&style=social"/></a>
채현우 | react frontend 제작 | <a href="https://github.com/hyunwoo0081"><img src="http://img.shields.io/badge/hyunwoo0081-green?style=social&logo=github"/></a> | <a href="mailto:hyunwoo0081@gmail.com"><img src="https://img.shields.io/badge/hyunwoo0081@gmail.com-green?logo=gmail&style=social"/></a>

## 저작권 및 사용권 정보 (Copyleft / End User License)
<p align="center">
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT">
</a>
