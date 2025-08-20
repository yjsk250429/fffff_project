import { createSlice } from '@reduxjs/toolkit';

const memberData = [
    {
        id: 1,
        name: '홍길동',
        tel: '010-0000-0000',
        email: 'abc@naver.com',
        password: 'a1234',
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
                console.log('로그인 성공:', item.name);
            } else {
                state.authed = false;
                state.user = null;
                alert('로그인 실패: 이메일 또는 비밀번호가 틀렸습니다.');
            }
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logout(state, action) {
            state.authed = false;
            state.user = null;
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
            alert('로그아웃 완료');
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
