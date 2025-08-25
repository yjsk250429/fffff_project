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
    toggleThumb: (state, action) => {
        const { productId, reviewId } = action.payload;
        const found = state.allReviews.find(item => item.productId === productId);
        if (!found) return;
      
        const idx = found.reviews.findIndex(r => r.reviewId === reviewId);
        if (idx === -1) return;
      
        const r = found.reviews[idx];
        if (r.liked) {
          r.thumbs = Math.max(0, r.thumbs - 1);
          r.liked = false;
        } else {
          r.thumbs += 1;
          r.liked = true;
        }
      
        state.currentProductReviews = [...found.reviews]
      },
      
  
  },
});

export const reviewActions = reviewSlice.actions;
export default reviewSlice.reducer;
