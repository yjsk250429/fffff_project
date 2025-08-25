import { createSlice } from '@reduxjs/toolkit';
import reviewData from '../../assets/api/reviewData';

const initialState = {
  allReviews: reviewData, 
  currentProductReviews: [], 
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    getReviewsByProductId: (state, action) => {
      const id = action.payload;
      const found = state.allReviews.find(item => item.productId === id);
      state.currentProductReviews = found ? found.reviews : [];
    },
    // 필요하다면 리뷰 추가/삭제 액션도 여기에 작성 가능
  },
});

export const reviewActions = reviewSlice.actions;
export default reviewSlice.reducer;
