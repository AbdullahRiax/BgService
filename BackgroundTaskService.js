
  import BackgroundService from 'react-native-background-actions';
  import BackgroundJob from 'react-native-background-actions';

  let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const increaseCountTask = async taskDataArguments => {
    const {delay} = taskDataArguments;
    await new Promise(async resolve => {
      for (let i = 0; BackgroundJob.isRunning(); i++) {

        // var value = await AsyncStorage.getItem('COUNT');
        // if(!value) {
        //   await AsyncStorage.setItem('COUNT', "2");
        // }
        // var value = await AsyncStorage.getItem('COUNT');
        // await AsyncStorage.setItem('COUNT', (parseInt(value) + 1).toString());
        // value = await AsyncStorage.getItem('COUNT');
        console.log('value', i);
        await sleep(delay);

      }
    });
  };
  const options = {
    taskName: 'Demo',
    taskTitle: 'Demo Running',
    taskDesc: 'Demo',
    taskIcon: {
      name: 'ic_launcher',
      type: 'mipmap',
    },
    color: '#ff00ff',
    parameters: {
      delay: 1000,
    },
    actions: '["Exit"]',
  };
  const start = () => {
    BackgroundService.start(increaseCountTask, options);
  };
  const stop = () => {
    BackgroundService.stop();
  };
  export default {
    start,
    stop,
  };