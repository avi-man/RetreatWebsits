$ErrorActionPreference = "Stop"

# Pexels API Key
$headers = @{
    "Authorization" = "6hqDFvHktXYR4DPuqBgangpJKS0GM6Rvx8B0VvKBhMTmX5gNkSpUL6b3"
}

# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "public/images"
New-Item -ItemType Directory -Force -Path "public/images/blog"

# Function to search and get first image URL
function Get-PexelsImage {
    param (
        [string]$query,
        [int]$perPage = 1
    )
    
    $searchUrl = "https://api.pexels.com/v1/search?query=$query&per_page=$perPage"
    $response = Invoke-RestMethod -Uri $searchUrl -Headers $headers -Method Get
    return $response.photos[0].src.large
}

# Get and download main images
$imageMap = @{
    "hero-bg.jpg" = "himalayan mountains sunrise"
    "healing-retreat.jpg" = "meditation retreat"
    "healing-retreat-detail.jpg" = "yoga meditation"
    "nature-culture.jpg" = "himalayan culture"
    "nature-culture-detail.jpg" = "himalayan village"
    "our-story.jpg" = "spiritual journey"
    "sarah.jpg" = "yoga teacher woman"
    "rajesh.jpg" = "meditation teacher man"
}

foreach ($image in $imageMap.GetEnumerator()) {
    Write-Host "Downloading $($image.Key)..."
    $imageUrl = Get-PexelsImage -query $image.Value
    Invoke-WebRequest -Uri $imageUrl -OutFile "public/images/$($image.Key)"
}

# Get and download blog images
$blogImageMap = @{
    "meditation.jpg" = "morning meditation"
    "packing.jpg" = "hiking gear backpack"
    "sound-healing.jpg" = "sound healing bowls"
    "culture.jpg" = "himalayan festival"
    "sustainability.jpg" = "eco friendly nature"
    "yoga.jpg" = "outdoor yoga practice"
}

foreach ($image in $blogImageMap.GetEnumerator()) {
    Write-Host "Downloading blog/$($image.Key)..."
    $imageUrl = Get-PexelsImage -query $image.Value
    Invoke-WebRequest -Uri $imageUrl -OutFile "public/images/blog/$($image.Key)"
}

Write-Host "All images have been downloaded successfully!" 