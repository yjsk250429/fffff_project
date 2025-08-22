import DailyItem from "./DailyItem";

const DailyArr = [
    {
        id:1,
        title:'바디케어 BEST',
        desc:'탄력 + 보습 + 향기 다.갖.춘 아몬드컬렉션',
        tags:['collection','best','almond'],
        img:'/images/main/insta0.jpg'
    },
    {
        id:2,
        title:'클렌징인 퓨전',
        desc:'더위에 피곤한 요즘 피부\n집에서 건강하게 케어하는 클렌징 루틴',
        tags:['cleansing','face','skin', 'home_care'],
        img:'/images/main/insta1.jpg'
    },
    {
        id:3,
        title:'EVENT',
        desc:'건성들을 위한 록시땅 겨울나기\n수분이 필요한 입술부터 큐티클, 머리카락까지!',
        tags:['pure_shea_butter','multi_balm','all'],
        img:'/images/main/insta2.png'
    },
    {
        id:4,
        title:'에코리필',
        desc:'4월 22일 지구의 날\n지구를 지키기 위한 록시땅의 발걸음',
        tags:['green','beauty','refill'],
        img:'/images/main/insta3.jpg'
    }
];

const DailyList = ({addToRefs}) => {
    return <ul>
        {DailyArr.map((daily)=><DailyItem key={daily.id} daily={daily} addToRefs={addToRefs}/>)}
        </ul>;
};

export default DailyList;
