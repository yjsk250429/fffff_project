// src/assets/api/reviewData.js

const sampleContents = [
    '정말 좋아요! 향도 좋고 보습력도 뛰어나서 요즘 매일 쓰고 있어요.',
  
    '보습력 최고입니다. 특히 손이 자주 트는 겨울철에 효과가 확실히 느껴졌어요.',
  
    '저는 조금 자극적이었어요. 민감성 피부라 그런지 가끔 따끔하긴 했어요. 참고만 하세요!',
  
    '가격 대비 만족도 좋아요. 처음엔 비싸다고 느꼈는데, 써보니 그만한 가치가 있어요.',
  
    '생각보다 작아요. 하지만 소량으로도 충분해서 꽤 오래 쓸 수 있을 것 같아요. 가방에 넣기도 좋고요.',
  
    // ▼ 스토리 리뷰 (더 길고 서술형)
    '출근 전에 손에 바르고 나가면 하루 종일 건조하지 않아요. 예전에는 점심쯤 되면 손등이 갈라졌는데, 이 제품 쓰고 나선 훨씬 편해졌어요.',
  
    '선물용으로 구매했는데 포장이 너무 고급스러워서 받는 사람이 감동하더라고요. 실제 사용해보고 저도 하나 더 샀어요. 향도 자극적이지 않고 부드러워요.',
  
    '평소엔 로션만 바르던 남편이 이 제품은 자기가 먼저 찾더라고요. 향이 은근히 중성적이라 남녀 모두에게 잘 맞는 느낌이에요. 요즘은 같이 쓰고 있어요.',
  
    '휴대용으로 가방에 넣어 다니면서 수시로 바르고 있어요. 손세정제 많이 쓰는 요즘 같은 시기에 필수템입니다. 피부가 거칠지 않아서 만족스럽습니다.',
  
    '처음엔 광고에 혹해서 샀는데 생각보다 괜찮네요. 바를 때 약간 꾸덕한 느낌이 있지만, 흡수가 빠르고 촉촉함이 오래가요. 피부 타입에 크게 상관없이 쓸 수 있을 것 같아요.'
  ];
  
  
  const sampleNames = [
    '김주은', '김도현', '박수민', '정유진', '최민준',
    '홍길동', '서지훈', '이한나', '고은비', '정찬우'
  ];

  const getRandomDate = () => {
    const start = new Date(2024, 0, 1);   // 2024-01-01
    const end = new Date(2025, 11, 31);   // 2025-12-31
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  };
  
  const generateReview = (productId) => ({
    rate: Math.floor(Math.random() * 5) + 1,
    date: getRandomDate(),
    name: sampleNames[Math.floor(Math.random() * sampleNames.length)],
    content: sampleContents[Math.floor(Math.random() * sampleContents.length)],
    image: Math.random() < 0.7 ? `/images/products/item${productId}.webp` : null,
    thumbs: Math.floor(Math.random() * 50)
  });
  
  // 전체 제품 리뷰 데이터 생성
  const allReviews = [];
  
  for (let i = 1; i <= 247; i++) {
    const reviewCount = Math.floor(Math.random() * 16); // 0 ~ 15개
    const reviews = Array.from({ length: reviewCount }, () => generateReview(i));
    allReviews.push({ productId: i, reviews });
  }
  
  
  export default allReviews;
  
//   {
//     productId: 5,
//     reviews: [
//       {
//         rate: 4,
//         date: '2025-08-10',
//         name: '최민준',
//         content: '흡수가 빠르고 산뜻해요.',
//         image: '/images/products/item.png',
//         thumbs: 17
//       },
//       ...
//     ]
//   }