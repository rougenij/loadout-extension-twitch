export interface Weapon {
    id: string;
    name: string;
    category: string;
    attachmentSlots: string[];
    imageUrl?: string;
}
export interface Attachment {
    id: string;
    name: string;
    type: string;
    compatibleWeaponCategories: string[];
    imageUrl?: string;
}
export interface WeaponLoadout {
    weapon: Weapon;
    attachments: Attachment[];
}
export interface Perk {
    id: string;
    name: string;
    description: string;
    tier: 1 | 2 | 3;
    imageUrl?: string;
}
export interface Equipment {
    id: string;
    name: string;
    description: string;
    type: "tactical" | "lethal" | "fieldUpgrade";
    imageUrl?: string;
}
export interface Loadout {
    id: string;
    name: string;
    primary?: WeaponLoadout;
    secondary?: WeaponLoadout;
    melee?: WeaponLoadout;
    tactical?: Equipment;
    lethal?: Equipment;
    fieldUpgrade?: Equipment;
    perks?: Perk[];
    isPublic: boolean;
    createdAt?: number;
    updatedAt?: number;
}
export interface StreamerProfile {
    twitchId: string;
    displayName: string;
    profileImageUrl?: string;
    isPremium: boolean;
    loadouts: Record<string, Loadout>;
}
