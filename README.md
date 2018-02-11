# Siji

`Trello + Wordpress + Everything Else`

Siji is project-management + publishing platform for your Chimera-CMS

# Getting Started

## Create Chimera-CMS

You can scaffold a Chimera-Framework based CMS by following [this](https://github.com/goFrendiAsgard/chimera-framework/wiki/Content-Management-System-(CMS)) guide


## Packing (without publishing)

Packing make your plugin installable by using `npm`. However, the packed package will not be published in `npmjs.com`. This is useful if you want to create private plugin

Here are the steps required to pack a package:

* Make sure you are in this package directory.
* Invoke

  ```bash
  npm pack
  ```
* A new `siji.tgz` file will be created.

## Installing

To install your plugin, please make sure you are already in `Chimera CMS` directory

```bash
npm install siji.tgz
```

## Uninstalling

To uninstall your plugin, please make sure you are already in `Chimera CMS` directory.

Then, you can invoke the following command:

```bash
npm uninstall siji
```