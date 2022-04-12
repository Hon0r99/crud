export interface Post {
    id: number,
    title: string,
    text: string,
    image: string,
    url: string,
    active: number,
    sort_order: null,
    created_at: string,
    updated_at: null | Date,
    deleted_at: null | Date,
}