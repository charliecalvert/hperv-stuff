## Adding to config

Here is an item in the config file:

    Host us02
        HostName 130.30.30.30
        Port 22
        User ubuntu
        IdentityFile ~/.ssh/Home-2019-10-27

Make sure you indent with tabs and use LF ffor line endings

## Send IP

Place this at the end of **.profile** or call **.send-ip** if **pi2** is defined:

    TEMP_FILE=temp_file
    IP_FILE=us03

    ip addr | grep -o "inet 172..*" | cut -f 2 -d ' ' | cut -f 1 -d / > "$TEMP_FILE"
    scp -i ~/.ssh/Home-2019-10-27 "$TEMP_FILE" pi@192.168.86.37:/home/pi/Git/hyperv-stuff/ip-files/"$IP_FILE"
    rm "$TEMP_FILE"

    echo "Sent "$IP_FILE" to raspberry pi"