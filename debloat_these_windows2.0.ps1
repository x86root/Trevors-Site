# Debloat These Windows! -- Trevor Belt 
    # Run as Administrator if not working.
# NOTE: If script still fails to run, open PowerShell manually and enter the command:
# Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force

# Captures all output for the user to review with current timestamp  
    # Add -Append to not overwrite if desired 
# Gets Date, formats it as year-m-day - time. Stores in a variable $timestamp to use later
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
Start-Transcript -Path "$env:USERPROFILE\Documents\DebloatLog_$timestamp.txt"

# Array of apps to remove, Add additional with "* *" as desired. ** Are wildcards for parts of app name
# Passes each item to the loop below
$bloatware = @("*Xbox*", "*Skype*", "*Solitaire*", "*Zune*", "*OneNote*", "*Weather*", "*News*", "*Tips*", "*3DViewer*", "*MixedReality*", "*FeedbackHub*", "*YourPhone*")

# foreach loop, fills $app variable with each element of the bloatware array.
foreach ($app in $bloatware) {
        Write-Host "Attempting to remove: $app"
    try {
        # Debloat Script -- Get App * name * frrom above | remove. 
        Get-AppxPackage -Name $app | Remove-AppxPackage
        Write-Host "Removed: $app"
    } catch {
        Write-Host "Failed to remove: $app"
    }
        # Try-Catch to remove app, if successful it prints removed. If it fails it tells the user.
}

# Smoothly ends the log file and saves to path listed at start
Stop-Transcript
