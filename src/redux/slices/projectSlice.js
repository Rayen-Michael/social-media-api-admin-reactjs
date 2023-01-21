import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    currentPage: null,
    totalPages: null,
    hasNextPage: false,
    hasPrevPage: false,
    limit: null,
    nextPage: null,
    prevPage: null,
    results: null,
    projectList: [],
    error: null,
};


const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        getProjects: (state, action) => {
            state.status = 'loading';
        },

        getProjectsSuccess: (state, action) => {
            state.currentPage = action.payload.currentPage;
            state.totalPages = action.payload.totalPages;
            state.hasNextPage = action.payload.hasNextPage;
            state.hasPrevPage = action.payload.hasPrevPage;
            state.limit = action.payload.limit;
            state.nextPage = action.payload.nextPage;
            state.prevPage = action.payload.prevPage;
            state.results = JSON.parse(JSON.stringify(action.payload.results));
            state.projectList = [...state.results];
            state.status = 'success';
        },

        loadMoreProjects: (state, action) => {
            state.status = 'loadingMore';
        },

        loadMoreProjectsSuccess: (state, action) => {
            state.currentPage = action.payload.currentPage;
            state.totalPages = action.payload.totalPages;
            state.hasNextPage = action.payload.hasNextPage;
            state.hasPrevPage = action.payload.hasPrevPage;
            state.limit = action.payload.limit;
            state.nextPage = action.payload.nextPage;
            state.prevPage = action.payload.prevPage;
            state.results = JSON.parse(JSON.stringify(action.payload.results));
            state.projectList = [...state.projectList, ...state.results];
            state.status = 'success';
        },

        getProjectsError: (state, action) => {
            state.error = action.payload;
            state.status = 'error';
        },

        clearProjectsError: (state, action) => {
            state.error = null;
        },

        clearProjects: (state, action) => {
            state.currentPage = null;
            state.totalPages = null;
            state.hasNextPage = false;
            state.hasPrevPage = false;
            state.limit = null;
            state.nextPage = null;
            state.prevPage = null;
            state.results = null;
            state.error = null;
            state.projectList = [];
            state.status = 'idle';
        },

        deleteProject: (state, action) => {
            state.results = state.results.filter(post => post._id !== action.payload);
        },

        updateProject: (state, action) => {
            const index = state.results.findIndex(post => post._id === action.payload._id);
            if (index !== -1) {
                state.results[index] = action.payload;
            }
        },

        addProject: (state, action) => {
            state.results.push(action.payload);
        },
    }
});

export const {
    getProjects,
    getProjectsSuccess,
    getProjectsError,
    clearProjectsError,
    clearProjects,
    loadMoreProjects,
    loadMoreProjectsSuccess,
    deleteProject,
    updateProject,
    addProject,
} = projectsSlice.actions;

export default projectsSlice;