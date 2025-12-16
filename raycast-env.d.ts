/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `stashit` command */
  export type Stashit = ExtensionPreferences & {}
  /** Preferences accessible in the `pop-stashit` command */
  export type PopStashit = ExtensionPreferences & {}
  /** Preferences accessible in the `view-stashit` command */
  export type ViewStashit = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `stashit` command */
  export type Stashit = {}
  /** Arguments passed to the `pop-stashit` command */
  export type PopStashit = {
  /** Queue name (optional) */
  "queue": string
}
  /** Arguments passed to the `view-stashit` command */
  export type ViewStashit = {}
}

