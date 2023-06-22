![image (1)](https://user-images.githubusercontent.com/79466778/184937450-8038f605-859e-4b4f-a768-87b2032c0ffb.png)<br>
```markdown
# Please do not use the issues page to submit liveries!! #
```
Join us on Discord! [![Discord](https://img.shields.io/discord/1008808128189579325.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/GnU7kBcXtR)<br>

# Geofs-Multiliveries
**A livery addon authored by Spice 9 and Ariakim Taiyo:**<br>
Adds `640` new liveries to the simulator.<br>
Features new liveries for the A319-100, A320neo, 787-10, 787-9, P8, and the 737-MAX 8. <br>
Partial multilayer visibility is supported; Only those who are using this addon will see custom liveries.<br>
There are "helper tags" added to supported airframes: look for the "[Mulitliveries Frame]" tag at the end of the aircraft name to see which are compatible.<br>

Here is a good tutorial by Aerospace Rules: https://www.youtube.com/watch?v=jLFyEEJZKbQ<br>

**HOW TO CONTRIBUTE:**<br>
> Download the plain texture maps from the source code,<br>
> Use an image editor to paint your livery onto the aircraft,<br>
> Export the texture file in the original resolution (IMPORTANT!),<br>
> Join our Discord server and submit your livery in the respective channel. We are looking into alternatives for those without Discord. For now though, **DO NOT** use the issues page to submit liveries. 

**Regarding Supported Browsers:**<br>
This addon was developed and tested on Chrome. Most browsers will support the addon, however there have been problems reported with Microsoft Edge and Firefox. <br>
If you cannot get the latest revision to function (the one with the dedicated menu popup) then use an older version for the time being.

**PBR Liveries:**<br>

Format for **PBR LIVERIES ONLY**:<br>
```json
{
  "name": "Boeing 737-200 (Airline Name) by Creator",
  "livery": "link_to_livery",
  "mptx": "link_to_multiplayer_texture"
  "pbrComposite": "link_to_pbrMetallicRoughness_composite_map"
  "normalMap": "link_to_opengl_normal_map"
  }
  ```

Note the two properties, "pbrComposite" and "normalMap".<br>
Both must be used in a PBR livery, otherwise it will not work with the addon. If you only wish to change one, you may link back to the default liveries at,<br>
`https://www.geo-fs.com/backend/aircraft/repository/737-200_450602_4140/composite.png`<br>
`https://www.geo-fs.com/backend/aircraft/repository/737-200_450602_4140/Material_004_Normal_UDIM.png`<br>
and change the other one.<br>

To ensure compatibility with the search algorithm, please name your 737-200 liveries with "Boeing 737-200" as the aircraft name.<br>

This system only works on the 737-200 currently, and in order to test it, you can paste using this format into the custom livery tab:<br>
`"colorMapUrl|pbrCompositeMapUrl|normalMapUrl"`
Note the "|" separating them. This is the format that is used by the addon natively to communicate the entire selection in a single string.<br>

If you do not know what you are doing, please wait until a tutorial has been made by myself or a trusted contributor with PBR mapping skills. <br>
