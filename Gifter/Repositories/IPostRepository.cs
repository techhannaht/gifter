﻿using Gifter.Models;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void Delete(int id);
        List<Post> GetAll();
        Post GetById(int id);
        void Update(Post post);
        List<Post> GetAllWithComments();
        List<Post> Search(string criterion, bool sortDescending);
        List<Post> SearchForHottest(DateTime? sinceDate = null);
    }
}