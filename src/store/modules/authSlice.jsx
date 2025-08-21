import { createSlice } from '@reduxjs/toolkit';

const memberData = [
    {
        id: 1,
        name: '홍길동',
        tel: {
            first:'010',
            middle:'0000',
            last:'0000',
        },
        email: 'abc@naver.com',
        password: 'a12345678',
        addr:{
            zipCode:'01234',
            mainAddr:'서울 서초구 강남대로 435',
            detailAddr:'101호',
        },
        birth:{
            year:'1999',
            month:'01',
            date:'01',
            moon:'solar',
        },
    },
];
const initialState = {
    members: localStorage.getItem('members')
        ? JSON.parse(localStorage.getItem('members'))
        : memberData,
    authed: localStorage.getItem('authed') ? JSON.parse(localStorage.getItem('authed')) : false, //로그인 여부
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null, // user에 로그인 정보를 담고, memebers에서 user가 있는지 비교
};
let no = initialState.members.length + 1;
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const { email, password } = action.payload;
            const item = state.members.find((member) => member.email === email);
            if (item && item.password === password) {
                state.authed = true;
                state.user = item;
            } else {
                state.authed = false;
                state.user = null;
                // alert('로그인 실패: 이메일 또는 비밀번호가 틀렸습니다.');
            }
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logout(state, action) {
            state.authed = false;
            state.user = null;
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        signup(state, action) {
            const user = action.payload;
            user.id = no++;
            state.members = [...state.members, user];
            localStorage.setItem('members', JSON.stringify(state.members));
        },

    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
