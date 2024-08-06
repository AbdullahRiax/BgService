import React, { useState, useEffect, useRef } from 'react';
import { View, Text, AppState, StyleSheet, AppRegistry, Alert, Button } from 'react-native';
import BackgroundTaskService from './BackgroundTaskService';


const App = () => {
 BackgroundTaskService.start()
};


export default App;
