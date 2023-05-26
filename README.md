# 📝 라이톤
**글의 시작과 끝을 함께하는 '글쓰기 동행 서비스'**

![이미지](https://github.com/KUALSNS/project/assets/74054325/278279e6-d4b3-4747-891d-af0bf5175ba4)

### 🏘️ 팀명: 도토리

##### R&R


| 파트 | 이름 | 담당 |
| --- | --- | --- |
| 기획 | 김효준 | 💡 **프로젝트 매니징**, 프로덕트 고도화 방향 설정 및 일정 매니징, 팀원 간의 커뮤니케이션 |
| 기획 | 강민주 | 💡 서비스 기획, 와이어프레임 작성, 서비스 기획 및 UX 설계 |
| 기획 | 이인혜 | 💡 서비스 기획, 세부 컨텐츠 기획 및 서비스최종보고서 작성 |
| 기획 | 노은서 | 💡 서비스 기획, 세부 컨텐츠 기획 및 서비스최종보고서 작성 |
| 디자인 | 남서윤 | 🖼️ **디자인 팀장**, UI/UX 툴을 이용한 프로토타입 디자인 |
| 개발 | 허연우 | 🖥️ **개발 팀장**, 개발 총 관리 및 기능 명세서 작성, 회원가입, 마이페이지 API 구현 |
| 개발 | 이승렬 | 🖥️ 기능 명세서 작성, 글쓰기, 로그인, 메인 페이지 API 구현 |
| 개발 | 백주연 | 💻 와이어 프레임 바탕 개발 진행, 기능 명세서 작성, 회원가입, 마이페이지 프론트 개발|
| 개발 | 최호연 | 💻 와이어 프레임 바탕 개발 진행, 기능 명세서 작성, 챌린지, 플래너 화면 프론트 개발|

### URL
[Writon](https://www.writon.site/)


### 📖 목적 및 필요성


#### 서비스의 개발동기


##### 시장조사를 통한 동기와 방안
   <브런치>, <네이버 블로그>, <인스타그램>과 같이 많은 유저를 확보한 기록 서비스는 많이 존재하지만, 공유가 목적이 아닌 자신을 위한 기록 서비스는 부재한다는 것을 확인. <라이톤 Writon>의 경우, 선택적으로 하는 챌린지 인증 외에는 별도로 기록이 공유되는 지점이 없기에 나에 대한 기록에 집중할 수 있고, 더욱 자유로운 글 작성이 가능함. 

- 	글쓰기 서비스의 높은 이용도

    a.	글 관련 대표 서비스인 <네이버 블로그>는 2020년 기준 콘텐츠 수 2억 2천만건 달성. 2022년 기준 3200만 유저 유치.

    b.	2022 앱 순위 를 확인하면 1위부터 15위 중 <인스타그램(3위)>, <밴드(11위)>, <트위터(15위)> 등 글을 작성하는 서비스를 확인할 수 있음. 짧은 글이어도 무언가를 쓰고 공유하는 서비스의 상시적 선호도 존재.

- 	공개 기능을 없앤 글쓰기

    a.	자신이 작성한 글을 다른 사람에게 공개하지 않는다고 해도, 글을 썼다는 행위 자체가 심리치료 과정에 있어 기본적인 치료 요인으로도 사용. 성찰적인 글쓰기로 자기인식과 자기수용을 향상하며, 이는 상담에서 치료적 도구로도 활용 .

    b.	공유 기능 없이 타인이 아닌 자신을 위한 글쓰기 활동을 통해 기록을 넘어서 자아성찰과 성장의 발판으로서 이용. 허구적 관계에서 경험한 소통이 현실에서 이루어지지 못할 경우 개인은 더 많은 공허감을 느끼게 될 수 있고, 소통을 촉진시키기 위해 더 많이 공유하는 결과 초래 .

- 	챌린지 기능을 통한 글쓰기 습관 형성

    a.	챌린지를 메인으로 제공하는 서비스에서 글쓰기 콘텐츠를 제공하는 경우도 있지만, 별도의 글쓰기 서비스 내에서 메인 서비스로 제공되지 않음

      → 주기적으로 특정 시간을 할애하게 되면서, 글쓰기를 일상적인 활동으로 만들 수 있음

    b.	챌린지를 통한 보상보다는 서비스 자체의 쉬운 글쓰기 도전과, 동기부여의 매개체로 이용되는 것이라 예상. 

#### 서비스의 목적
##### 글 기록 서비스 사용자의 니즈 파악
- 	글쓰기 서비스를 사용함에 있어서, 사람들은 크게 두 가지의 니즈를 보임

    a.	 글을 쓰는 것에 대한 의지는 있지만, 주제와 내용 설정에 대한 도움이 필요

    b.	글쓰기 활동을 꾸준히 이어나가는 것에 대한 동기부여가 필요

[근거 1] 자체 필드 리서치  결과(잠재 고객 군 대상으로 설문조사 진행)

　　a. 절반 이상의 응답자가 글을 시작하고 글을 구성하는 데에 있어서 어려움을 느끼고 있음을 확인함

　　b. 구체적으로, 글을 작성할 때 가장 많은 시간을 할애하는 항목으로 응답자의 45%가 ‘내용 정리’, 24%가 ‘주제 선정’을 택함

[근거 2] 자예드 대학의 안내 질문을 활용한 성찰적 글쓰기 연구 

　　a.   글쓰기를 유도하는 질문을 통해 자기 성찰적인 글쓰기 능력을 향상시킬 수 있었음.

　　b.   가이드 질문을 사용함으로써, 개인들은 그들의 생각과 감정을 더 잘 표현할 수 있었으며, 이는 그들의 글쓰기의 깊이와 의미를 부여했음.

##### 기존 서비스의 문제점 파악

- 개인보다는 공유 중심

    a.	사용자의 기록 방식을 고려한, 개인을 위한 글 기록 서비스의 부재

    b.	개인적인 글쓰기를 위한 비공개 옵션이 제한적이거나 유저가 느끼기에 보안상 불안한 느낌을 주는 경우가 존재

- 	개인 맞춤형 기능의 부재

    a.	기존 글쓰기 서비스는 많은 유저들을 대상으로 글쓰기 환경을 제공해야 하기에 보편적으로 사용 가능한 기본 글쓰기 환경을 제공. 이는 사용자 개인의 요구에 부합하지 않을 확률이 높음

- 	유저 스스로 원동력을 찾아야 한다는 아쉬움

    a.	글을 쓰기 위한 원동력이 서비스로부터 주어진다면 습관화에 도움이 될 것임

    b.	<네이버 블로그>가 출시한 ‘주간 일기 챌린지’에 초반부터 103만 명이 몰렸을 만큼 원동력 부여에 대한 니즈는 높지만, 장기적인 동기부여 서비스는 부재하는 상황



##### 서비스의 구현 목적

- 	글쓰기를 통한 개인적인 성장과 발전 도모

    a.	개인에게 맞춘 글쓰기를 통해 내면에 집중함으로써 자기 성장과 발전을 도움

    b.	글쓰기로 생각과 감정을 표현하며 자기표현과 커뮤니케이션 능력 향상을 도움

    c.	글로 목표를 작성하고 상황을 기록하며 글쓰기에 대한 동기부여 및 효과적인 관리 차원에서 도움

- 	꾸준한 글쓰기 습관 형성에 도움

    a.	글 템플릿을 통해 글쓰기에 어려움을 느끼던 사용자의 심리적 장벽을 완화함

    b.	글쓰기 자체의 즐거움을 발견할 수 있도록 하여 글쓰기의 습관화를 도움

    c.	사용자의 기록에 따른 달력, 달성률, 스티커 제공을 통해 글쓰기 목표 달성을 독려

    d.	개인적인 관심사를 바탕으로 질문 템플릿을 고르며 빠르고 원하는 글을 작성하는 데 도움


### 🚩사용자 정의

#### 목표 국내 시장 규모
![image](https://github.com/KUALSNS/project/assets/74054325/4fea7f29-9099-47a4-b1f1-232826a37af2)

#### 포지셔닝 맵
![image](https://github.com/KUALSNS/project/assets/74054325/e593c366-756f-44fe-bcf4-2a55974fdf89)

#### 타겟층 확장 계획
![image](https://github.com/KUALSNS/project/assets/74054325/f508f99e-0ee3-4a2b-b484-8a6c29113028)

#### 유저 페르소나와 저니맵
![image](https://github.com/KUALSNS/project/assets/74054325/32eccceb-bd2e-426f-b5a6-e1836000d256)

### 📈서비스

#### 서비스 핵심 가치
![image](https://github.com/KUALSNS/project/assets/74054325/c2fa9ff4-e19d-4090-9116-b30c132a5800)

#### 서비스 플로우
![image](https://github.com/KUALSNS/project/assets/74054325/ce210fda-ebeb-4801-89e7-15045f732517)

#### 경쟁 서비스 분석
![image](https://github.com/KUALSNS/project/assets/74054325/94bb8f8c-1722-4542-83c5-3fb6a6858f1c)

#### <라이톤 Writon>의 주요 기능 특징

(1) 다양한 주제의 글쓰기 챌린지 제공 
- 	<라이톤 Writon>은 다양한 주제의 글쓰기 챌린지를 제공함
(예시 : 하루에 대한 기분 점수 기록하기, 기록을 통해 추억 장소 보관하기 등)
-	다양한 주제들이 있기에 사용자는 자신이 관심 있는 주제를 선택하여 글을 쓰거나 혹은 생각해 보지 못한 주제로 글을 쓸 수도 있음
-	글쓰기 주제 선정에 어려움을 느끼던 사용자들은 시간 단축 효과를 얻을 수 있음
-	서비스 개시 이후 품질 향상을 위해 더 많은 주제의 글쓰기 챌린지를 제공할 계획임

(2) 질문 템플릿을 제공해 쉬운 글쓰기의 시작 경험 제공 
-	질문 템플릿은 사용자의 이야기를 자연스럽게 이끌어낼 수 있도록 구성
-	사용자는 개인이 원하는 질문 템플릿을 추가함으로써 자유롭게 글 템플릿을 구성
-	개인 맞춤형 템플릿을 통해 글쓰기를 시작하는 과정을 통해 쉽게 글을 작성
-	글쓰기에서 첫 문장을 쓰는데 어려움을 느끼던 사용자들은 시간 단축 효과 얻음
-	서비스 개시 이후 품질 향상을 위해 각 글쓰기 챌린지에 더 많은 질문을 제공할 계획

(3) 챌린지 달력, 챌린지 달성률, 성장 분석으로 글쓰기 목표 달성을 독려
-	‘챌린지 달력’은 글을 작성한 날마다 인증 스티커가 붙여지는 형식임
-	‘챌린지 달성률’은 챌린지 기간 동안 챌린지의 몇 퍼센트를 달성했는지 실시간으로 보여주며, 홈 화면에서 바로 확인 가능하도록 하였음
-	‘성장 분석’은 한 달, 일주일을 단위로 참여일, 진행 중인 챌린지, 미 달성 일을 보여줌
-	‘성장 분석’은 또한 지난달, 지난주와 비교한 통계치를 보여줌
-	글을 꾸준히 쓰는 것을 힘들어하던 사용자들은 동기부여 효과를 얻을 수 있음

(4) 온전히 자신에게 집중하여 글을 작성해 보는 경험 제공 
-	최근 개방형 소셜 네트워크 서비스의 사용률이 급격히 높아짐에 따라 공유 목적의 글쓰기가 주를 이룸
-	<라이톤 Writon>은 공개/공유 목적이 아닌 플랫폼이기에 사용자가 자기 자신에게 집중할 수 있는 질문들을 선별하여 제공하며 자신만을 위한 글을 쓰는 시간을 가질 수 있도록 함


#### 서비스 비즈니스 모델
![image](https://github.com/KUALSNS/project/assets/74054325/74c24698-bd77-455c-911a-e2d3e357d50b)

#### 린캔버스
![image](https://github.com/KUALSNS/project/assets/74054325/54426011-ca00-46ad-850b-386b8f3b4a52)

### 🎁디자인

#### 로고 및 디자인 시스템
![image](https://github.com/KUALSNS/project/assets/74054325/bc59a225-776c-4703-b079-cdc1390bc84f)
![image](https://github.com/KUALSNS/project/assets/74054325/f6965922-ad67-4b0b-8ae9-d9f29e9eb2d8)
![image](https://github.com/KUALSNS/project/assets/74054325/a70cf680-54a5-41a3-b2df-fbba875d93c1)
![image](https://github.com/KUALSNS/project/assets/74054325/08960e95-e790-4cb4-b83a-f5a71ab3e5ba)

#### 화면 디자인
![image](https://github.com/KUALSNS/project/assets/74054325/846aac51-7b85-454e-b890-54eafd9725fa)


### 💻 기술 스택

---
🔑**Front-End**🔑 : 
</br>
Language && Framework 
</br>&nbsp;
   <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-the-badge&logo=javascript&logoColor=white"> 
   <img src="https://img.shields.io/badge/react-61DAFB?style=flat-the-badge&logo=react&logoColor=white"> 
</br>
Communication Method
</br>&nbsp;
 <img src="https://img.shields.io/badge/axios-5A29E4?style=flat-the-badge&logo=axios&logoColor=white"> 
</br>
State Management 
</br>&nbsp;
<img src="https://img.shields.io/badge/recoil-f26b00?style=flat-the-badge&logo=relay&logoColor=white"> 
</br>
Build Tool 
</br>&nbsp;
<img src="https://img.shields.io/badge/vite-646CFF?style=flat-the-badge&logo=vite&logoColor=white"> 
</br></br>
🔓**Back-End**🔓 : 
</br>
Lanuage && Framework 
</br>&nbsp;
 <img src="https://img.shields.io/badge/typescript-3178C6?style=flat-the-badge&logo=typescript&logoColor=white"> 
 <img src="https://img.shields.io/badge/node.js-339933?style=flat-the-badge&logo=node.js&logoColor=white"> 
 <img src="https://img.shields.io/badge/express-000000?style=flat-the-badge&logo=express&logoColor=white"> 
</br>
Infra
</br>&nbsp;
 <img src="https://img.shields.io/badge/docker-2496ED?style=flat-the-badge&logo=docker&logoColor=white"> 
 <img src="https://img.shields.io/badge/githubactions-2088FF?style=flat-the-badge&logo=githubactions&logoColor=white"> 
 <img src="https://img.shields.io/badge/amazons3-569A31?style=flat-the-badge&logo=amazons3&logoColor=white"> 
 <img src="https://img.shields.io/badge/amazonec2-FF9900?style=flat-the-badge&logo=amazonec2&logoColor=white"> 
 <img src="https://img.shields.io/badge/amazonrds-527FFF?style=flat-the-badge&logo=amazonrds&logoColor=white"> 
</br>
Monitoring
</br>&nbsp;
 <img src="https://img.shields.io/badge/pm2-2B037A?style=flat-the-badge&logo=pm2&logoColor=white"> 
 <img src="https://img.shields.io/badge/slack-4A154B?style=flat-the-badge&logo=slack&logoColor=white"> 
</br>
DB
</br>&nbsp;
 <img src="https://img.shields.io/badge/mysql-4479A1?style=flat-the-badge&logo=mysql&logoColor=white"> 
 <img src="https://img.shields.io/badge/redis-DC382D?style=flat-the-badge&logo=redis&logoColor=white"> 
</br>
API Documentation 
</br>&nbsp;
 <img src="https://img.shields.io/badge/postman-FF6C37?style=flat-the-badge&logo=postman&logoColor=white"> 


### 👀 기술 스택 선정 이유

---

### React
1. 컴포넌트 기반
- 컴포넌트 단위 관리가 가능하기 때문에 재사용성이 높고 유지보수에 용이합니다.
2. Virtual DOM
- Virtual DOM을 이용하기 때문에 메모리 누수가 줄고 수정 비용을 절감할 수 있습니다.
3. 지식공유
- 개발 생태계와 커뮤니티가 활성화되어 있어 문제상황에 대응하기 쉽습니다.

### Vite
1. 서버 시작 속도
- 개발할 때 번들링을 하지 않고 ESM 방식을 사용하기 때문에 로컬 서버 구동 속도가 매우 빠릅니다.
2. 업데이트 속도
- HMR을 통해 애플리케이션을 다시 시작하지 않고도 변경된 컨텐츠만을 갱신할 수 있습니다.

### Axios
1. Promise기반
- return을 promise 객체로 해주기 때문에 response 데이터를 다루기 쉽습니다.
2. 브라우저 호환성
- 크로스 브라우징 최적화로 브라우저(특히, 구형 브라우저)호환성이 좋습니다.

### Recoil
1. 단순함
- 다른 전역상태관리(ex. Redux)에 비해 사용하기 간편하고, 이를 활용해 코드의 복잡도를 줄일 수 있습니다.
2. 비동기 처리
- 추가 라이브러리 없이 Recoil 자체만으로 비동기 처리를 해결 할 수 있습니다.


### Node.js
1. Single-Thread의 non-blocking I/O 이벤트 기반
- Node.js는 단일 스레드(Single-Thread)의 논 블로킹(Non-blocking I/O) 이벤트 기 반 비동기 방식으로 처리되어 높은 처리 성능을 가지고 있습니다.
2. npm(node package manager)을 통한 다양한 모듈(패키지) 제공
- 내장 HTTP 서버 라이브러리를 포함하고 있어 웹 서버에서 아파치 등의 별도의 소프 트웨어 없이 동작하는 것이 가능하며 이를 통해 웹 서버의 동작에 있어 더 많은 통제 를 가능케 합니다.
3. 웹 개발 호환성
- Javascript 언어로 Front-end 뿐만 아니라 Back-end 개발 환경을 구성할 수 있기에 생산성이 높고 러닝 커브가 줄어듭니다.
4. 경량 및 효율성
- Node.js는 다른 웹 프레임워크에 비해 적은 리소스를 필요로 하는 가볍고 효율적인 프레임워크이므로 배포 및 관리가 더 쉽습니다.

### TypeScript
1. 유형 안전성
- TypeScript는 JavaScript에 유형 안전성을 추가하여 런타임이 아닌 컴파일 타임에 오류를 잡는 데 도움이 됩니다. 이는 코드의 안정성과 유지 관리성을 향상시키는 데 도움이 될 수 있습니다.
2. 향상된 코드 가독성
- TypeScript의 강력한 유형 지정 및 명시적 유형 선언은 코드 가독성을 개선하고 이해 및 유지 관리를 더 쉽게 만드는 데 도움이 될 수 있습니다.

### Docker
1. 일관성
- Docker는 응용 프로그램 환경이 서로 다른 시스템 간에 일관성을 유지하도록 하여 종속성 또는 구성의 차이로 인해 발생하는 문제를 방지합니다.
2. 효율성
- Docker를 사용하면 애플리케이션의 여러 구성 요소를 별도의 컨테이너로 격리하여 리소스 사용량을 줄이고 효율성을 높일 수 있습니다.

## 📍 Code Convention

---
<details>
<summary>변수명</summary>   
<div markdown="1">       


1. Camel Case 사용
- lower Camel Case
2. 함수의 경우 동사+명사 사용
- ex) getInformation()
3. flag로 사용 되는 변수는 조동사 + flag 종류로 구성
- ex) isNum
4. 약어는 되도록 사용하지 않는다.
- 부득이하게 약어가 필요하다고 판단되는 경우 팀원과 상의를 거친다.

</div>
</details>

<details>
<summary>주석</summary>
<div markdown="1">

1.  한줄 주석은 // 를 사용한다.

```typescript
// 한줄 주석일 때
/**
 * 여러줄
 * 주석일 때
 */
```

2.  함수에 대한 주석

```typescript
/**
 * @route Method /Route
 * @desc Function Description
 * @access Public
 */
```

3.  Bracket 사용 시 내부에 주석을 작성한다.

```typescript
if (a == 5) {
  // 주석
}
```

</div>
</details>

<details>
<summary>Bracket</summary>
<div markdown="1">

1.  한줄 if 문은 여러 줄로 작성한다.

```typescript
// 한줄 if 문 - 여러 줄로 작성
if (trigger) {
  return;
}
```

2. 괄호는 한칸 띄우고 사용한다.

```typescript
// 괄호 사용 한칸 띄우고 사용한다.
if (left == true) {
  return;
}
```

3. Bracket 양쪽 사이를 띄어서 사용한다.

```typescript
const { userId } = request.user;
```

</div>
</details>

<details>
<summary>비동기 함수의 사용</summary>
<div markdown="1">

1.  async, await 함수 사용을 지향한다.
2.  Promise 사용은 지양한다.
3.  다만 로직을 짜는 데 있어 promise를 불가피하게 사용할 경우, 주석으로 표시하고 commit에 그 이유를 작성한다.

</div>
</details>

## 📌 Commit Convention

---

### [TAG] 메시지

| 태그 이름  |                               설명                                |
| :--------: | :---------------------------------------------------------------: |
|  chore   |                     코드 수정, 내부 파일 수정                     |
|   feat   |                         새로운 기능 구현                          |
|   add    | FEAT 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 |
|   fix    |                          버그, 오류 해결                          |
|   style    |      코드에 관련 없는 주석 달기, 줄바꿈                          |
|   docs   |                   README나 WIKI 등의 문서 개정                    |

## 💻 Branch Strategy

---
<details>
<summary>Git Workflow</summary>
<div markdown="1">

```
main → develop → feature_# / fix_#
feature, fix 이하 번호는 issue 번호에 맞게 생성

Issue 예시
/-------------------------
Feature/Fix Request
기능 설명 : 초대장을 보내줍니다.
To-Do List
* 난수 생성해서 초대코드 보내주기
-------------------------/

PR 예시
/-------------------------
Solved Issue
close/해결한 이슈의 링크

Motivation
* 초대장 생성 api 구현

Key Changes
* 난수 생성해서 초대코드 생성

To Reviewers
* 머지해주세요~~
-------------------------/

1. issue 생성
2. local - feature_# / fix_# 에서 각자 기능 작업
3. remote - feature_# / fix_# 에 Push
4. remote - develop 으로 PR
5. 코드 리뷰 후 Confirm 받고 remote - develop Merge
6. remote - develop 에 Merge 될 때 마다 모든 팀원 local - develop pull 받아 최신 상태 유지
```

</div>
</details>

| Branch Name |       설명       |
| :---------: |:--------------:|
|    main     |    배포용 브랜치     |
|   develop   |   구현 완료 브랜치    |
| feature\_/#  | 이슈 별 기능 구현 브랜치 |
|   fix\_/#    |  이슈 별 픽스 브랜치   |

## 📃 API Documentation

[API명세서](https://documenter.getpostman.com/view/23289358/2s93eSZvMC)

## ⚙️ Software Architecture

---
![Architecture](https://github.com/KUALSNS/BE/assets/37439067/cd0733d3-629c-40d2-b115-1f0835adb8f7)





