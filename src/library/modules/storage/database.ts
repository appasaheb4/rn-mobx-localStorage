import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase(
  {
    name: 'mobx.db',
    location: 'default',
    createFromLocation: 1,
  },
  () => console.log('db created.'),
  error => {
    console.log(error);
  },
);

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS base (id INTEGER PRIMARY KEY NOT NULL, encData TEXT NOT NULL);',
        [],
        () => {
          resolve(true);
        },
        (_, err) => {
          reject(err);
          return false;
        },
      );
    });
    console.log('db created.');
  });
};

export const fetch = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM base;',
        [],
        (tx, result) => {
          // var len = result.rows.length;
          // for (let i = 0; i < len; i++) {
          //   let row = result.rows.item(i);
          //   console.log(`Employee name: ${row.encData}, Dept Name: ${row}`);
          // }

          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        },
      );
    });
  });
};

export const insert = (encData: any) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO base (encData) VALUES (?);',
        [encData],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        },
      );
    });
  });
};

export const update = (encData: any) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE base SET encData=? WHERE id=1',
        [encData],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        },
      );
    });
  });
};
