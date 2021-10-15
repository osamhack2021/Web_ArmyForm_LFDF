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
 > Army Form은 용사들이 부대를 직접 만들어 나간다는 의미를 담고 있는 프로젝트입니다. 최근 이슈가 된 병영 식당을 선두로 해서 많은 용사들이 부대에 갖고 있던 건의사항을 듣고, 이를 각 부대 지휘관에게 효율적으로 전달할 수 있는 어플리케이션 개발을 목표로 하고 있습니다. 군 부대에서 사용하기 적합하고 광범위한 용도에  설문조사 프로그램입니다.


## 기능 설명
 - 설문조사 생성하기
    <img src="ArmyForm_Logo.png" alt="설문조사 생성 페이지" width="300" height="300" />
    - 간편하게 사용할 수 있는 기본적인 설문지 제공
    - 여러가지 형태의 질문 제공
 - 설문조사 참여하기
    <img src="ArmyForm_Logo.png" alt="설문조사 참여 페이지" width="300" height="300" />
    - 현재 참여할 수 있는 설문지를 한 눈에 볼 수 있는 대쉬보드 제공
    - 참여한 설문조사의 결과 확인 가능
    - 설문조사의 남은 기한 확인 가능
 - 설문조사 결과보기
    <img src="ArmyForm_Logo.png" alt="설문조사 결과 페이지" width="300" height="300" />
    - 각 질문 형태에 따른 일반적인 수치, 그래프 또는 워드클라우드로 결과 제공
    - 필요에 따라 EXCEL, SVC으로 저장 기능 제공

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
민승기 | AI | <a href="https://github.com/ironore15"><img src="http://img.shields.io/badge/ironore15-green?style=social&logo=github"/></a> | <a href="mailto:ironore15@gmail.com"><img src="https://img.shields.io/badge/ironore15@gmail.com-green?logo=gmail&style=social"/></a>
이형창 | WEB | <a href="https://github.com/AnOldStory"><img src="http://img.shields.io/badge/AnOldStory-green?style=social&logo=github"/></a> | <a href="mailto:AnOldStory@gmail.com"><img src="https://img.shields.io/badge/AnOldStory@gmail.com-green?logo=gmail&style=social"/></a>
홍태성 | WEB | <a href="https://github.com/tshong3"><img src="http://img.shields.io/badge/tshong3-green?style=social&logo=github"/></a> | <a href="mailto:tshong1002@gmail.com"><img src="https://img.shields.io/badge/tshong1002@gmail.com-green?logo=gmail&style=social"/></a>
채현우 | WEB | <a href="https://github.com/hyunwoo0081"><img src="http://img.shields.io/badge/hyunwoo0081-green?style=social&logo=github"/></a> | <a href="mailto:hyunwoo0081@gmail.com"><img src="https://img.shields.io/badge/hyunwoo0081@gmail.com-green?logo=gmail&style=social"/></a>
<!--
 - [민승기](https://github.com/ironore15) (AI)
 - [이형창](https://github.com/AnOldStory) (WEB)
 - [홍태성](https://github.com/tshong3) (WEB)
 - [채현우](https://github.com/hyunwoo0081) (WEB)
-->
## 저작권 및 사용권 정보 (Copyleft / End User License)
<p align="center">
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT">
</a>
