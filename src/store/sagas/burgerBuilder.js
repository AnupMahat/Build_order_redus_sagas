import { put } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions/index'

export function* initIngredientsSagas() {
  try {
    const response = yield axios.get(
      'https://react-my-burger-2f17d.firebaseio.com/ingredients.json'
    )
    yield put(actions.setIngredients(response.data))
  } catch (error) {
    yield put(actions.fetchIngredientsFailed())
  }
}
