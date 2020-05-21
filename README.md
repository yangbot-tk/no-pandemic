# NoPandemic

> https://covaid-14.web.app/

## Table of Contents

- [Introduction](#01)
- [Install](#02)
- [Usage](#03)
- [Taskflow](#04)
- [Features](#05)
- [Preview](#06)
- [Tools](#07)
- [APIs](#08)
- [Resource](#09)
- [Contributor](#10)
- [Change Log](#11)

#

## <span id="01">Introduction</span>

Due the the current COVID19 epidemic, our life are dramatically changed in respect to school, work and everything. There are many information and app online related to COVID-19. However, our team would like to develop an app which not only help user tracks the covid-19 person around the local area, but more acts as an platform which collecting all the information you need to know regarding the current pandemic.

The cluster map data is used for demonstration purpose which we assume we already had government support. After attending some hackthons, we think the process of building a complete and functional system and presenting the idea is more important to us.

#

## <span id="02">Install</span>

> `npm install`

> `yarn install`

#

## <span id="03">Usage</span>

**Please replace the GOOGLE_API_KEY with your google map api token first**

> `npm start`

> `yarn start`

#

## <span id="04">Taskflow</span>

![avatar](public/images/md/taskflow.png)

#

## <span id="05">Features</span>

- Display a cluster map which shows number the people who have covid19 symptoms around user's current location
- Swicth prefereed location to easily auto-zoom to that location
- Announcement board shows all the outbreak announcement regarding covid-19
- COVD-19 symptom self accessment and return respected risk level
- Calculating the most frequnt symptom from user input database and displayed as an option for the symptom accessment
- Aid resource package based on user's risk level to covid-19
- Canada government official preventation and isolation strategy packages to help users understand the epidemic
- Official organization which help elder, students and employees who are confirmed as covid-19
- Admin symstem that change user's risk status in order to proceed next step
- Profile and appearance settings with dark mode added
- Donate the people who are in need
- Donate: A dashboard display a list of nurses and doctor
- Display the world map that shows the countries are impacted by the current epidemic (interactive)
- Game: gathers all the covid-19 game that made by BCIT CST students
- Mobile responsive for all devices

#

## <span id="06">Preview</span>

![avatar](public/images/md/1.png)
![avatar](public/images/md/2.png)
![avatar](public/images/md/3.png)
![avatar](public/images/md/4.png)
![avatar](public/images/md/5.png)
![avatar](public/images/md/6.png)
![avatar](public/images/md/7.png)
![avatar](public/images/md/8.png)
![avatar](public/images/md/9.png)
![avatar](public/images/md/10.png)
![avatar](public/images/md/11.png)

### Dark Mode

![avatar](public/images/md/darkmode/1.png)
![avatar](public/images/md/darkmode/2.png)
![avatar](public/images/md/darkmode/3.png)
![avatar](public/images/md/darkmode/4.png)
![avatar](public/images/md/darkmode/5.png)
![avatar](public/images/md/darkmode/6.png)

#

## <span id="07">Tools</span>

- HTML5, CSS3
- JavaScript
- React
- Sass
- Firebase
- Python
- PhotoShop, Illustrator

#

## <span id="08">API & Libraries </span>

- [mathdroid](https://github.com/mathdroid/covid-19-api)
- [COVID19](https://covid19api.com/)
- [News API](https://newsapi.org/)
- [Google Map](https://developers.google.com/maps/documentation)
- [Google Map React](https://github.com/google-map-react/google-map-react)
- [Material UI Framework](https://material-ui.com/)
- [React Grid Gallery](https://github.com/benhowell/react-grid-gallery)
- [jQuery](https://jquery.com/)
- [AOS](https://github.com/michalsnik/aos)

#

## <span id="09">Resources</span>

- [FLATICON](https://www.flaticon.com/home)
- [Freepik](https://www.freepik.com/)

#

## <span id="10">Contributors</span>

<div>
    <a href="https://github.com/yang052513"><img src="public/images/md/yang.png" width="100px" height="100px"/></a>
    <a href="https://github.com/wenboji">
    <img src="public/images/md/wenbo.png" width="100px" height="100px"/></a>
</div>

#

## <span id="11">Change Log</span>

### v0.0.3 (2020/05/17 01:48)

- Released dark mode theme for users

### v0.0.2 (2020/05/16 01:48)

- Fixed home loading map bugs
- Added switch panel for home component
- User change symptom status with select drop down list
- Updated 5 different state for symptom return
- Made all component responsive for all devices
- Added hero component
- Added game component

### v0.0.1 (2020/05/11 01:48)

- Initial deploy
