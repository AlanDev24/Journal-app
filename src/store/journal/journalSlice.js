import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    saveMessage: "",
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmpryNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.saveMessage = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.saveMessage = "";
    },
    noteUpdated: (state, action) => {
      //?Sirve para actualizar cada nota
      state.isSaving = false;
      //? recorre las notas de el state
      state.notes = state.notes.map((note) => {
        //? si la note que estas actualizando es igual a la que estas recorriendo
        if (note.id === action.payload.id) {
          //?actualiza la nota
          return action.payload;
        }
        //?regresas la nota actualizada
        return note;
      });

      state.saveMessage = `${action.payload.title}, actualizada correctamente`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    clearNotesLogOut: (state) => {
      state.isSaving = false;
      state.saveMessage = "";
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter( note => note.id !== action.payload)
    },
  },
});

export const {
  addNewEmpryNote,
  setActiveNote,
  setNotes,
  setSaving,
  noteUpdated,
  deleteNoteById,
  savingNewNote,
  setPhotosToActiveNote,
  clearNotesLogOut,
} = journalSlice.actions;
