# btle-mocker

Install apt dependencies:
```
sudo apt install nodejs npm
```

Bleno requires bluetooth to get stopped:
```
sudo systemctl disable bluetooth
sudo systemctl stop bluetooth
```

Power up Bluetooth
```
sudo hciconfig hci0 up

```
