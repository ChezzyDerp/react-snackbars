### Pretty simple and lightweight React UI library to snackbars

### Install
    npm i @cds-solutions/react-snackbars 

### Usage example
	<SnackStack max={3}>
        <Snackbar changeValue={setSnackValue} timeout={2500} view="error" open={snackValue}>
            <p>Error message with timeout 2.5s !</p>
        </Snackbar>
		
        <Snackbar changeValue={setSnackValue1} timeout={5000} view="warning"  open={snackValue1}>
		
          <img src="https://avatars.githubusercontent.com/u/78046258?v=4" alt="" />
          <p>Warning message!</p>

        </Snackbar>
		
        <Snackbar changeValue={setSnackValue2} timeout={5000}  open={snackValue2}>
		
          <img src="https://avatars.githubusercontent.com/u/78046258?v=4" alt="" />
          <p>Successful message!</p>

        </Snackbar>
     </SnackStack>


### Appearance
![](https://i.ibb.co/4Zy2Kd2/Screenshot-2022-09-19-234506.png)![](https://im5.ezgif.com/tmp/ezgif-5-0bd4e12a4f.webp)
